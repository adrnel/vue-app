<template>
  <div>
    <img :src="product.image">
    <h1>Name: {{product.name}}</h1>
    <h3>Price: {{product.currency}}{{product.price}}</h3>
    <p>Description: {{product.long_desc}}</p>
    <button v-on:click="addToBasket">Add to Basket</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'product',
  data () {
    return {
    }
  },
  props:{
    product: {
      type: Object
    }
  },
  methods: {
    addToBasket (product) {
      this.$store.commit('addToBasket', this.product)
    }
  },
  computed: {
    ...mapState([
      'basket'
    ])
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