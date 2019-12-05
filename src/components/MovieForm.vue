<template>
  <div>
    <form class="movie-form">
      <h3 > Edit Movie</h3>
    <div class="input-field">
      <input type="text" placeholder="Title" v-model="clonedMovie.title" required />
      <small></small>
      </div>
      <div class="input-field">
      <input type="text"  placeholder="Release Date" v-model="clonedMovie.releaseDate" required/>
      </div>
      <div class="select-field">
      <select v-model="clonedMovie.genreId" >
        <option v-for="genre in genres" :value="genre.id" :key="genre.id">
          {{  genre.name}}
        </option>
      </select>
      </div>
      <div>
       <v-btn small color="secondary" dark @click="save">Save</v-btn> <v-btn small @click="cancelEdit">Cancel</v-btn>
      </div>
    </form>
  </div>
</template>

<script>
  import genres from '../movies-api/genres';
  export default {
    name: 'MovieForm',
    props: {
      movie: {
        type: Object
      },
    },
    data() {
      return {
        genres,
        clonedMovie: {...this.movie}
      }
    },
    methods: {
      cancelEdit() {
        this.$emit('cancelEdit')
      },
      save() {
        this.$emit('save', this.clonedMovie)
      }
    },
  }
</script>

<style lang="scss" scoped>
form {
    width: 80%;
    background-color: white;
    text-align: center;
    margin: auto;
    padding: 15px 0 30px 0;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    h3 {
      padding: 10px;
      margin: 20px;
    }
    .input-field, .select-field {
      width: 100%;
      margin-bottom: 30px;
      small {
        display: block;
      }
    }
    input, select {
      padding: 12px;
      font-size: inherit;
      border-radius: 7px;
      outline: none;
      border: 1px solid #d8d8d8;
      width: 85%
    }

    button {
      margin: 10px;
    }
  }
</style>