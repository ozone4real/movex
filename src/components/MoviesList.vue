<template>
<div class="movies-container">
  <div class="movies-list" v-if="!selectedMovie" >
    <MoviesListHeaderVue />
    <h3>{{ message }}</h3>
    <div>
      <div class="movie-item" v-for="movie in movies" :key="movie.id" >
        <MoviesListItemVue :movie="movie" @editMovie="editMovie" :genres="genres" />     
      </div>
    </div>
  </div>
   <MoviesFormVue :movie="selectedMovie" v-if="selectedMovie" @cancelEdit="cancelEdit" @save="save" :genres="genres" /> 
   </div>

</template>

<script>
import axios from 'axios';
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
        genres: [],
        selectedMovie: undefined
      }
    },
    methods: {
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
        const [moviesData, genresData] = await Promise.all([
          axios.get('movies-api/movies.json'),
          axios.get('movies-api/genres.json')
        ])
        
        this.movies = moviesData.data;
        this.genres = genresData.data;
        this.message = ""
      }
    },

    components: {  MoviesListHeaderVue, MoviesListItemVue, MoviesFormVue }
    
  }
</script>

<style lang="scss" scoped>
  .movies-container {
    width: 95%;
    margin: auto;
    padding: 20px;
  }
</style>