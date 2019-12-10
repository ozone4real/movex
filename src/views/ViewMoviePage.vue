<template>
  <div class="view-movie-page">
  <div class="movie-container">
    <h2> {{ movie.title }} </h2>
    <img :src="movie.picture" />
     <div class="release-date"><h3>Release Date: </h3> {{ movie.releaseDate }} </div>
     <h3>Summary </h3>
    <p class="movie-summary">
      {{ movie.summary }}
    </p>
  </div>
  </div>
</template>

<script>
  // import { getMoviesData } from '../data';
  import { mapState, mapActions } from 'vuex';
  export default {
    name: 'ViewMoviePage',
    created() {
      this.loadMovie()
    },
    data() {
      return {
        // movie: {}
      }
    },
    methods: {
      ...mapActions(['getMovieAction']),
      loadMovie() {
        this.message = "Fetching movie"
        const { id } = this.$route.params;
        this.getMovieAction(id)
        console.log(this.movie)
        // const { id } = this.$route.params;
        // const { moviesData, genresData } = await getMoviesData();
        // const movie = moviesData.find(movie => movie.id === parseInt(id));
        // movie.genre = genresData.find(genre => genre.id === movie.genreId);
        // this.movie = movie
        this.message = ""

      }
    },
    computed: {
      // ...mapGetters(['getMovieByID'])
      ...mapState(['movie'])
    },
  }
</script>

<style lang="scss" scoped>
.movie-container {
  h2 {
    padding: 20px 0;
  }
  .release-date {
    padding: 20px 0;
    h3 {
      display: inline;
    }
  }
  img {
    width: 100%;
    height: 600px;
  }
  p {
    padding: 20px 0
  }
}

</style>