<template>
  <div>
    <MovieForm :isCreation=false heading="Edit Movie" :movie="movie" />
  </div>
</template>

<script>
  import MovieForm from '../components/MovieForm.vue'
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'EditMoviePage',
    props: {
      id: {
        type: Number
      }
    },

    async created() {
      this.loadMovie()
    },
    components: {
      MovieForm
    },
    methods: {
      ...mapActions(['getMovieAction']),
      async loadMovie() {
        this.message = "loading......."
        await this.getMovieAction(this.id);
        this.message = ""
      }
    },
    computed: {
      ...mapState(['movie'])
    },
  }
</script>

<style lang="scss" scoped>

</style>