<template>
  <router-link class="movies-card" :to="{name: 'movie', params: { id: movie.id }}">
    <div class="movie-img">
      <img :src="movie.picture" />
    </div>
    <div class="movie-details">
    <div class="movie-title">
      <h3>{{ movie.title }}</h3>
    </div>
    <div class="movie-genre">
      In {{ movie.genre.name }}
    </div>
    </div>
     <router-link :to="{name: 'editMovie', params: { id: movie.id }}"> <v-icon class="edit-btn">mdi-pencil</v-icon> </router-link>
  </router-link>
</template>

<script>
  export default {
    name: 'MovieCard',
    props: {
      movie: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
  .movies-card {
    width: 31%;
    margin: 20px 10px;
    background: white;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: unset;
    position: relative;

    .edit-btn {
      position: absolute;
      display: none;
      bottom: 10px;
      right: 10px;
    }
    
    .edit-btn:hover {
      box-shadow: -1px 3px 7px #e8e8e8
    }

    img {
      height: 180px;
      width: 100%;
    }

    .movie-details {
      padding: 10px;
      div {
        margin-bottom: 10px;
      }
    }
  }

  .movies-card:hover .edit-btn {
    display: inline;
  }
</style>