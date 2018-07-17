<template>
  <div id="app">
    <aside v-if="isMenuShowing">
      <ul class="menu-list">
        <router-link to="/">Home</router-link>
        <router-link to="/product">Product</router-link>
        <router-link to="/checkout">Checkout</router-link>
      </ul>
    </aside>
    <button>
      <a v-on:click='showMenu'>{{setMenuText}}</a>
    </button>
    <Basket v-if="basket.length > 0" :basket='basket'></Basket>
    <Basket v-else :basket='basket' slot="empty">
      The Basket is empty
    </Basket>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Basket from './components/Basket.vue'
import ProductList from './components/ProductList.vue'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      isMenuShowing: false
    }
  },
  methods: {
    showMenu () {
      this.isMenuShowing = !this.isMenuShowing
    },
    ...mapActions([
       'setProductsActionCreator' // map `this.setProductsActionCreator()` to `this.$store.dispatch('setProductsActionCreator')`
    ]),
  },
  components: {
    Basket,
    ProductList
  },
  computed: {
    setMenuText () {
      return !this.isMenuShowing ? 'Show Menu' : 'Hide Menu'
    },
    ...mapState([
      'basket'
    ])
  },
  mounted: function () {
    this.setProductsActionCreator()
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.menu-active {
    display: block
}

.menu-not-active {
    display: none
}

.menu-list .router-link-exact-active {
  color: #50e2de;
}
</style>
