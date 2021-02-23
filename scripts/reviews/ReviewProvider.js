import { bakeryAPI } from "../Settings.js"

let reviews = []
let reviewForProduct = []

export const useReviews = () => reviews.slice()
export const useReviewForProduct = () => [ ...reviewForProduct ]

const eventHub = document.querySelector("#container")

const reviewStateChangeEvent = () => {
    const upDateReviewState = new CustomEvent("reviewStateChanged")
    eventHub.dispatchEvent(upDateReviewState)
}

export const getReviews = () => {
  return fetch(`${bakeryAPI.baseURL}/reviews`)
    .then(response => response.json())
    .then(parsedResponse => {
      reviews = parsedResponse
    })
}

export const getReviewsForProduct = (productId) => {
    return fetch(`${bakeryAPI.baseURL}/reviews?product=${productId}`)
      .then(response => response.json())
      .then(parsedResponse => {
        reviewForProduct = parsedResponse
      })
  }

export const saveReview = reviewObj => {
    return fetch(`${bakeryAPI.baseURL}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewObj)
    })
    .then(getReviews)
    .then(reviewStateChangeEvent)
}

