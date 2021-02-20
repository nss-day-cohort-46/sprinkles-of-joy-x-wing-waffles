import { getProducts, useProducts } from "./ProductProvider.js"
import { getCategories, useCategories } from "../categories/CategoryProvider.js"
import { Product } from "./Product.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".menu__items")

let bakeryCategories = []
let renderProducts = []

export const ProductList = () => {
  getProducts()
    .then(getCategories)
    .then(() => {
      bakeryCategories = useCategories()
      renderProducts = useProducts()
      render()
    })
}

const render = () => {
  contentTarget.innerHTML = renderProducts.map(product => {
    const productCategory = bakeryCategories.find(cat => cat.id === product.categoryId)

    return Product(product, productCategory)
  }).join("")
}

eventHub.addEventListener("categorySelected", catChangeEvent => {
  if (catChangeEvent.detail.selectedCategory !== "0") {
    const productsFilteredByCategory = useProducts().filter(product =>product.categoryId === +catChangeEvent.detail.selectedCategory)
    renderProducts = productsFilteredByCategory
    render()
  } else {
    renderProducts = useProducts()
    render()
  }
})