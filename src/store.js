import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basket: []
  },
  mutations: {
    addToBasket: (state, product) => {
      return state.basket.push(product)
    },
    removeFromBasket(state, index) {
      return state.basket.splice(index, 1)
    }
  },
  actions: {

  },
});
