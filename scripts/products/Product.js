const eventHub = document.querySelector("#container")

export const Product = (product, category, rating) => {
    let ratingRender = ""
    if (rating === 1) {
        ratingRender = "⭐"
    } else if (rating === 2) {
        ratingRender = "⭐ ⭐"
    } else if (rating === 3) {
        ratingRender = "⭐ ⭐"
    } else if (rating === 4) {
        ratingRender = "⭐ ⭐ ⭐ ⭐"
    } else if (rating === 5) {
        ratingRender = "⭐ ⭐ ⭐ ⭐ ⭐"
    }
    return `
      <section class="baked_good">
          <header class="baked_good__header">
            <h4>${product.name}</h4>
            <p>$${product.price}</p>
          </header>
          <div>
            <button id="addProduct--${product.id}">Add to Cart</button>
            <p>${product.description} [${category.name}]</p>
            ${rating !== 0 ? `<div class="rating">Rating: <a href="#" id="reviewDetails">${ratingRender}</a></div>` : `<div>no reviews, yet</div>`}
          </div>
          <div>
            <button id="leaveReview--${product.id}">Leave A Review</button>
          </div>
        </section>
          `
        }
        
eventHub.addEventListener("click", evt => {
    // console.log(evt)
    if (evt.target.id.startsWith("addProduct--")) {
        const [prefix, productId] = evt.target.id.split("--")
        const addProductEvent = new CustomEvent("addToCart", {
            detail: {
                addedProduct: productId
            }
        })
        eventHub.dispatchEvent(addProductEvent)
    } else if (evt.target.id.startsWith("leaveReview--")) {
        const [ prefix, reviewProductId ] = evt.target.id.split("--")
        const leaveReviewEvent = new CustomEvent("leaveReview", {
            detail: {
                reviewedProduct: reviewProductId
            }
        })
        eventHub.dispatchEvent(leaveReviewEvent)
    } else if (evt.target.id === "reviewDetails")
        const viewReviewDetails = new CustomEvent("reviewDetails")
        eventHub.dispatchEvent(viewReviewDetails)
})
