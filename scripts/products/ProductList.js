import { getProducts, useProducts } from "./ProductProvider.js"
import { getCategories, useCategories } from "../categories/CategoryProvider.js"
import { getReviews, useReviews } from "../reviews/ReviewProvider.js"
import { Product } from "./Product.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".menu__items")

let bakeryCategories = []
let renderProducts = []
let productReviews = []

export const ProductList = () => {
  getProducts()
    .then(getCategories)
    .then(getReviews)
    .then(() => {
      bakeryCategories = useCategories()
      renderProducts = useProducts()
      productReviews = useReviews()
      render()
    })
}

const render = () => {
  contentTarget.innerHTML = renderProducts.map(product => {
    const productCategory = bakeryCategories.find(cat => cat.id === product.categoryId) 
    const reviewsForEachProduct = useReviews().filter(reviews => reviews.productId === product.id)
      if (reviewsForEachProduct.length > 0) {
        const arrayOfRatings = reviewsForEachProduct.map(r => r.rating)
        let rating = arrayOfRatings.reduce((rating1, ratingNext) => rating1 + ratingNext, 0)
        rating = Math.round(rating/arrayOfRatings.length)
        console.log(rating)
        return Product(product, productCategory, rating)
      } else {
        return Product(product, productCategory, 0)
      }
       
  }).join("")
}

eventHub.addEventListener("categorySelected", catChangeEvent => {
  if (catChangeEvent.detail.selectedCategory !== "0") {
    const productsFilteredByCategory = useProducts().filter(product => product.categoryId === +catChangeEvent.detail.selectedCategory)
    renderProducts = productsFilteredByCategory
    render()
  } else {
    renderProducts = useProducts()
    render()
  }
})