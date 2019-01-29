<template>
  <div id="appuserinput">
    <p>{{message}}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>

<script>
  export default {
    name: 'appuserinput',
    data() {
      return { message: 'Hello Vue.js' }
    },
      methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('');
        }
      }
    }
</script>
