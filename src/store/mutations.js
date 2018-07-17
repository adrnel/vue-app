export default {
  addToBasket: (state, product) => {
    return state.basket.push(product)
  },
  removeFromBasket(state, index) {
    return state.basket.splice(index, 1)
  },
  setProducts(state, result) {
    return state.products = result
  }
}