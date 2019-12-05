<template>
  <div id="app">
    <Movies />
  </div>
</template>

<script>
import Movies from './components/Movies.vue'

export default {
  name: 'app',
  components: {
    Movies
  }
}
</script>

<style>
body {
  background: #F1F7F9;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 15px;
  box-sizing: border-box;
  
}
</style>
