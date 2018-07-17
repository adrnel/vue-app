<template>
  <div class="checkout">
    <CheckoutForm></CheckoutForm>
  </div>
</template>

<script>
import CheckoutForm from '../components/CheckoutForm.vue'
import router from '../router';
import { mapState } from 'vuex'
export default {
  name: 'checkout',
  data () {
    return {
    }
  },
  components: {
    CheckoutForm
  },
  computed: {
    ...mapState([
      'basket'
    ])
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.basket.length === 0) {
        router.go(-1)
      }
    })
  },
};
</script>

<style lang="scss">
</style>