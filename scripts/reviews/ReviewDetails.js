import { getReviewsForProduct, useReviewForProduct } from "./ReviewProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".review__details")

eventHub.addEventListener("viewReviews", e => {
    console.log(e)

    getReviewsForProduct(e.detail.reviewedProduct).then(() => {
    const reviewsForProduct = useReviewForProduct()
    return renderReviewDetail(reviewsForProduct)
})
})

const renderReviewDetail = reviewCollection => {
    contentTarget.innerHTML += `<a href="" id="closeReview">close reviews</a>`
    {   const reviewDetail = reviewCollection.map(reviewForProduct => 
        reviewForProduct.length != 0 ? 
        contentTarget.innerHTML += `<div class="reviewDetails" id="${reviewForProduct.id}">${reviewForProduct.text}</div><div id=${reviewForProduct.rating}>${reviewForProduct.rating}</div>` : 
        window.alert("No reviews for this product</div>") 
    )

    return reviewDetail
    }
}

eventHub.addEventListener("click", e => {
    if(e.target.id === "closeReview") {
        contentTarget.innerHTML = ""
    }
})