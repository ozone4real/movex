<template>
<div class="home-page">
  <h2>Top 2019 Movies</h2>
  <div class="movies-list">
    <MovieCardVue v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
  <h3>{{ message }}</h3>
  </div>
</template>

<script>
  import MovieCardVue from '../components/MovieCard.vue'
  import { mapActions, mapState } from'vuex'
  export default {
    name: 'Home',
    components: {
      MovieCardVue
    },
    data() {
      return {
        // movies: []
      }
    },
    created() {
      this.loadMovies()
    },
    methods: {
      ...mapActions(['getMoviesAction']),
      loadMovies() {
        this.message = "Fetching movies........"
        // const { moviesData, genresData } = await getMoviesData()
        // console.log(moviesData)
        // this.movies = moviesData.map(movie => {
        //   movie.genre = genresData.find(genre => genre.id === movie.genreId);
        //   return movie
        // });
        // this.genres = genresData;
        this.getMoviesAction()
        this.message = ""
      }
    },
    computed: {
      ...mapState(['movies'])
    },
  }
</script>

<style lang="scss" scoped>
  .movies-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }
</style>