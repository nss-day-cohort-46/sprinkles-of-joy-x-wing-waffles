
const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".review_form")

eventHub.addEventListener("leaveReview", e => {
    ReviewForm()
})

const ReviewForm = () => {
    render()

}

const render = () => {
    return contentTarget.innerHTML = `
     <form action="" class="revewForm">
        <fieldset>
            <label htmlFor="review-author">Name: </label>
            <input type="text" placeholder="Name" id="review-author">
        </fieldset
        <fieldset>
                <label for="reviewSelect">Rating:</label>
                <select class="reviewSelect" id="reviewSelect">
                    <option value="1">🌟 </option>
                    <option value="2">🌟 🌟 </option>
                    <option value="3">🌟 🌟 🌟 </option>
                    <option value="4">🌟 🌟 🌟 🌟 </option>
                    <option value="5">🌟 🌟 🌟 🌟 🌟 </option>
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
            <button id="saveReview">Save Review</button>
        </div>
     </form>
    `
}


