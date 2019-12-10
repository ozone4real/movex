<template>
  <div v-if="movie" class="movie">
    <div>{{ movie.title }}</div>
    <div>{{ genres.find(genre => genre.id ===  movie.genreId ).name }}</div>
    <div>{{ movie.releaseDate }}</div>
    <div><v-icon @click="editMovie"> mdi-pencil</v-icon></div>
  </div>
</template>

<script>
// import genres from '../movies-api/genres';
// function getGenre(genreId) {
//     return genres.find(genre => genre.id === genreId ) 
//   }
  export default {
    name: 'MoviesListItem',
    // filters: {
    //   getGenreName(value) {
    //     return getGenre(value).name
    //   }
    // },
    methods: {
      editMovie() {
        this.$emit('editMovie', this.movie)
      }
    },
    props: {
      movie: {
        type: Object
      },
      genres: {
        type: Array
      }
    },
  }
</script>

<style lang="scss" scoped>

  .movie {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 20px 0;
    background: white;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px;
    div {
      width: 24%;
      text-align: center
    }
    .mdi-pencil {
      cursor: pointer;
    }
  }
</style>