export default {
  getFilteredProducts: state => {
    return state.products.filter(product => product.available)
  }
}