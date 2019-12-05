<template>
<div class="movies-container">
  <div class="movies-list" v-if="!selectedMovie" >
    <MoviesListHeaderVue />
    <h3>{{ message }}</h3>
    <div>
      <div class="movie-item" v-for="movie in movies" :key="movie.id" >
        <MoviesListItemVue :movie="movie" @editMovie="editMovie" />     
      </div>
    </div>
  </div>
   <MoviesFormVue :movie="selectedMovie" v-if="selectedMovie" @cancelEdit="cancelEdit" @save="save" /> 
   </div>

</template>

<script>
import movies from '../movies-api/movies';
import MoviesListHeaderVue from './MoviesListHeader.vue';
import MoviesListItemVue from './MoviesListItem.vue';
import MoviesFormVue from './MovieForm.vue';
  export default {
    name: 'MoviesList',
    created() {
      this.loadMovies()
    },

    data() {
      return {
        movies: [],
        selectedMovie: undefined
      }
    },
    methods: {
      async fetchMovies() {
        return new Promise(resolve => setTimeout(() => (resolve(movies)), 1500))
      },
      editMovie(value) {
        this.selectedMovie = value
        console.log(this.selectedMovie)
      },
      cancelEdit(){
        this.selectedMovie = undefined;
      },
      save(value) {
        const moviesClone = [...this.movies]
        const index = moviesClone.indexOf(moviesClone.find(movie => movie.id === value.id));
        moviesClone[index] = value;
        this.movies = moviesClone;
        this.selectedMovie = undefined;
      },
      async loadMovies() {
        this.message = "Fetching movies........"
        this.movies = await this.fetchMovies()
        this.message = ""
      }
    },

    components: {  MoviesListHeaderVue, MoviesListItemVue, MoviesFormVue }
    
  }
</script>

<style lang="scss" scoped>
  .movies-container {
    width: 60%;
    margin: auto;
    padding: 20px;
  }
</style>