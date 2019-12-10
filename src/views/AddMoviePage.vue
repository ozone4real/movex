<template>
  <div>
    <MovieForm :isCreation=true />
  </div>
</template>

<script>
  import MovieForm from '../components/MovieForm'
  export default {
    name: 'AddMoviePage',
    components: {
      MovieForm,
    },
  }
</script>

<style lang="scss" scoped>

</style>