import productsService from '../services/products'

export default {
  setProductsActionCreator ({ commit }) {
    productsService()
      .then((result) => {
        commit('setProducts', result)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}