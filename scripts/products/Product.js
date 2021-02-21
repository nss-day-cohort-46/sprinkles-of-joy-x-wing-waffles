const eventHub = document.querySelector("#container")

export const Product = (product, category, rating) => {
    // console.log(rating)
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
          ${rating !== 0 ? `<div class="rating">${rating}</div>` : `<div>no reviews, yet</div>`}
          <div>
          <button id="leaveReview--${product.id}">Leave A Review</button>
          </div>
          </section>
          `
        }
        
        // ${rating.map(r => {
        //     const rateRender = Math.round((r.rating + r.rating)/rating.length)
        //   return `<div class="rating" id="">${rateRender}</div>`
        // }).join('')}
        
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
