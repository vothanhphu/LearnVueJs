<template>
  <div id="appcondition">
    <span v-if="seen">Now you see me</span><br />
    <span v-if="hide">You don't see me</span>
  </div>
</template>
<script>
export default {
  name: 'appcondition',
  data () {
    return { seen: true, hide: false }
  }
}
</script>
