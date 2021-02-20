const eventHub = document.querySelector("#container")

export const Product = (product, category) => {
    return `
      <section class="baked_good">
          <header class="baked_good__header">
              <h4>${product.name}</h4>
              <p>$${product.price}</p>
          </header>
          <div>
              <button id="addProduct--${product.id}">Add to Cart</button>
              <p>${product.description} [${category.name}]</p>
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
    }
})
