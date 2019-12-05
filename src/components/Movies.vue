<template>
  <div class="movies">
    <MoviesListVue />
  </div>
</template>

<script>
import MoviesListVue from './MoviesList.vue';
  export default {
    name: 'Movies',
    components: { MoviesListVue }
  }
</script>

<style lang="scss" scoped>
</style>