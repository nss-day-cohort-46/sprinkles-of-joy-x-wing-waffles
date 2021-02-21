import { Product } from "../products/Product.js"
import { ProductList } from "../products/ProductList.js"
import { getProducts, useProducts } from "../products/ProductProvider.js"
import { saveReview } from "./ReviewProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".review_form")

eventHub.addEventListener("leaveReview", e => {
    console.log(e.detail.reviewedProduct)
    getProducts().then(() => {
        const thisProuct = useProducts().find(product => product.id === +e.detail.reviewedProduct)
        console.log(thisProuct)
        renderReviewForm(thisProuct)
    })
})

const renderReviewForm = (product) => {
    return contentTarget.innerHTML = `
     <form action="" class="revewForm">
        <fieldset>
            <label htmlFor="review-title">Title: </label>
            <input type="text" placeholder="Title" id="review-title">
        </fieldset
        <fieldset>
                <label for="reviewSelect">Rating:</label>
                <select class="reviewSelect" id="reviewSelect">
                    <option value="🌟">🌟</option>
                    <option value="🌟 🌟">🌟 🌟</option>
                    <option value="🌟 🌟 🌟">🌟 🌟 🌟</option>
                    <option value="🌟 🌟 🌟 🌟">🌟 🌟 🌟 🌟</option>
                    <option value="🌟 🌟 🌟 🌟 🌟">🌟 🌟 🌟 🌟 🌟</option>
                </select>
        </fieldset>
        <fieldset>
            <label htmlFor="review-text">Review: </label>
            <textarea placeholder="Your Review Here" id="review-text" rows="4" cols="50"></textarea>
        </fieldset>
        <fieldset>
            <label htmlFor="review-date">Date: </label>
            <input type="date" placeholder="Date" id="review-date">
        </fieldset>
        <div>
            <button id="saveReview--${product.id}">Save Review</button>
        </div>
     </form>
    `
}

eventHub.addEventListener('click', evt => {
    if(evt.target.id.startsWith("saveReview--") ) {
        evt.preventDefault()
        const title = document.querySelector("#review-title").value
        const rating = +document.querySelector("#reviewSelect").value
        const text = document.querySelector("#review-text").value
        const customerId = sessionStorage.getItem("soj-customer-id").value
        const productId = +evt.target.id.split("--")[1]

        const review = {
            title: title,
            rating: rating,
            text: text,
            customerId: customerId,
            productId: productId
        }
        saveReview(review)
        // .then(ProductList)
        contentTarget.innerHTML = ""
    }
})

