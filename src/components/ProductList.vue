<template>
  <div class="productList">
    <div class="columns container">
      <div class="column item" v-for="(product, index) in getFilteredProducts" :key="index">
        <Product :product="product"></Product>
      </div>
    </div>
    <h3>{{this.freeShipping}}</h3>
  </div>

</template>

<script>
import productsService from '../services/products'
import Product from './Product.vue'
import Basket from './Basket.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'productList',
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    freeShipping(){
      return this.basket && this.basket.length >= 5 ? 'Free Shipping Available' : ''
    },
    ...mapGetters([
      'getFilteredProducts'
    ])
  },
  components: {
    Basket,
    Product
  },
  props:{
    basket: {
      type: Array
    }
  },
};
</script>
<style lang="scss" scoped>
  img {
    width: 100px;
    height: 100px;
  }
  .container{
    display: flex;
  }
  .item{
    flex-grow: 1
  }
  .column {
    margin: 20px;
  }
</style>