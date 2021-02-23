import { bakeryAPI } from "../Settings.js"

let products = []

// function that returns shallow copy of entire products array
export const useProducts = () => products.slice()

// function that returns promise to GET all products from api
export const getProducts = () => {
  return fetch(`${bakeryAPI.baseURL}/products`)
    .then(response => response.json())
    .then(bakedGoods => {
      products = bakedGoods
    })
}

// function that returrns promise to GET products from api and reviews related to product
// export const getProducts = () => {
//   return fetch(`${bakeryAPI.baseURL}/products?_embed=reviews`)
//     .then(response => response.json())
//     .then(bakedGoods => {
//       products = bakedGoods
//     })
// }
