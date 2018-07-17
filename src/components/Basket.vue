<template>
  <div class="Basket">
    <slot>
      <i class="fa fa-shopping-basket"></i>
      <h3> Your basket contains {{basketLength}} items</h3>
      <h3> Your basket total is £{{basketTotal}}</h3>
      <div v-for="(item, index) in basket" :key="index">
        <h3>Name: {{item.name}} - price {{item.price}}
          <button v-on:click="removeFromBasket(index)">X</button>
        </h3>
      </div>
    </slot>
    <slot name="empty"></slot>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'productList',
  data () {
    return {
      products: {}
    }
  },
  computed: {
    basketLength: function () {
      return this.basket ? this.basket.length : 0
    },
    basketTotal: function () {
      if (this.basket && this.basket.length > 0){
        let priceArray = this.basket.map((item) => item.price)
        return priceArray.reduce((acc, cur) => acc + cur).toFixed(2)
      }
      return 0
      // return this.basket && this.basket.length > 0 ? this.basket.reduce((acc, cur) => acc + cur) : 0
    }
  },
  props:{
    basket: {
      type: Array
    }
  },
  methods: {
    removeFromBasket(index) {
      this.$store.commit('removeFromBasket', index)
    }
  },
};
</script>