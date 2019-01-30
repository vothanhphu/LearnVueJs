<template>
  <div id="loop">
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{todo.text}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'loop',
  data () {
    return {
      todos:
        [
          { id: 1, text: 'Learn Javascript' },
          { id: 2, text: 'Learn Vue' },
          { id: 3, text: 'Build something awesome' },
          { id: 4, text: 'Line 4 text' },
          { id: 5, text: 'Line 5 text' }
        ]
    }
  }
}
</script>
