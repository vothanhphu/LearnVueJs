<template>
  <div id="loop">
    <ol>
      <li v-for="todo in todos">
        {{todo.text}}
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'loop',
    data() {
      return {
        todos: 
        [
              { text: 'Learn Javascript' },
              { text: 'Learn Vue' },
              { text: 'Build something awesome' },
              { text: 'Line 4 text' },
              { text: 'Line 5 text' }
            ]
        }
    }
  }
</script>
