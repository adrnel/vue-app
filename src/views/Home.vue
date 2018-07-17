<template>
  <div>
    <h1>{{title}}</h1>
      <h2>{{description}}</h2>
    <img src="../assets/Rubiks-Cube-PNG-HD.png">
  </div>
</template>

<script>
import Basket from '../components/Basket.vue'
import Header from '../components/Header.vue'

export default {
  name: 'home',
  data () {
    return {
        title: 'Adrian`s Store',
        description: 'Adrian`s Store sells all kinds of climbing stuff and rubiks cube like puzzles',
        adrianRed: 'red',
        googleURL: 'http://www.google.com',
        checked: false
    }
  },
  methods: {
    updateTitle () {
      this.title = 'Title has been updated'
      this.checked = !this.checked
    }
  },
  components: {
    Basket,
    Header
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red {
  color: red;
}
.page-blue {
    background-color: blue
}
</style>

