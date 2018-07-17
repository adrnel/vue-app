<template>
  <div class="CheckoutForm">
    <form @submit="submitForm">
      First name:<br>
      <input type="text" v-model="firstName">
      <br>
      Payment Number:<br>
      <input type="text" v-model="paymentNumber">
      <br>
      Do you agree to Ts&Cs?<br>
      <input type="checkbox" v-model="checkBox">
      <br>
      <input type="submit" value="Submit">
    </form>
    {{error}}
  </div>
</template>

<script>
export default {
  name: 'CheckoutForm',
  data () {
    return {
      firstName: '',
      paymentNumber: '',
      checkBox: false,
      error: ''
    }
  },
  methods: {
    submitForm(e) {
      console.log('submitForm method')
      e.preventDefault()
      console.log('submitForm method')
      if(this.firstName.length === 0) this.error = 'please enter a first name'
      else if(this.paymentNumber.length === 0) this.error = 'please enter a payment number'
      else if(this.checkBox === false) this.error = 'please confirm the Ts&Cs'
      else this.error = 'Submitted successfully'
    }
  }
};
</script>