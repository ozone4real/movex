import Vue from 'vue'
import Vuex from 'vuex'
import { getMoviesData, getMovie, getGenres, updateMovie, addMovie } from '../data';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    genres: [],
    movie: {}
  },
  mutations: {
    getMovies(state, movies) {
      state.movies = movies
    },
    getMovie(state, movie) {
      state.movie = movie
    },
    getGenres(state, genres) {
      state.genres = genres
    },
    updateMovie({ movies }, movie ) {
      const index = movies.indexOf(movies.find(m => m.id === movie.id));
      movies[index] = movie;
    },
    addMovie(state, movie) {
      state.movies.push(movie)
      state.movie = movie
    }
  },
  actions: {
    async getMoviesAction({ commit }) {
      const movies = await getMoviesData()
      commit('getMovies', movies);
    },

    async getMovieAction({ commit }, id) {
      const movie = await getMovie(id)
      commit('getMovie', movie)
    },

    async getGenresAction({ commit }) {
      const genres = await getGenres();
      commit('getGenres', genres)
    },
    async updateMovieAction({ commit}, movie) {
      const data = await updateMovie(movie)
      commit('updateMovie', data)
    },
    async addMovieAction({ commit }, movie) {
      const data = await addMovie(movie)
      commit('addMovie', data)
    }
  },
  getters: {
    getMovieByID: state => id => {
      const movie = state.movies.find((movie) => movie.id === id);
      movie.genre = state.genres.find((genre) => genre.id === movie.genreId)
      return movie
    }
  },
  modules: {
  }
})
