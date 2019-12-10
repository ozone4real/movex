<template>
  <div id="app">
    <Header />
    <main>
    <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
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
  font-size: 16px;
  box-sizing: border-box;
}
main {
    width: 60%;
    padding: 40px 0;
    margin: auto;
  }
</style>
