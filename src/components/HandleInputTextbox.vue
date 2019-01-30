<template>
  <div id="appuserinput">
    <p>{{ message }}</p><br>
    <input v-model="message" />

  </div>
</template>

<script>
export default {
  name: 'appuserinput',
  data () {
    return { message: 'Please input your text' }
  }
}
</script>
