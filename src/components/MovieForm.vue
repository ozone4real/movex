<template>
  <div>
    <form class="movie-form">
      <h3 > {{ heading }} </h3>
    <div class="input-field">
      <input type="text" placeholder="Title" v-model="movieData.title" required />
      <small></small>
      </div>
      <div class="input-field">
      <input type="text"  placeholder="Release Date" v-model="movieData.releaseDate" required/>
      </div>
      <div class="input-field">
      <textarea type="text"  placeholder="Summary" v-model="movieData.summary" required>  </textarea>
      </div>
      <div class="input-field">
      <input type="text"  placeholder="Picture" v-model="movieData.picture" required/>
      </div>
      <div class="select-field">
      <select v-model="movieData.genreId" >
        <option v-for="genre in genres" :value="genre.id" :key="genre.id">
          {{  genre.name}}
        </option>
      </select>
      </div>
      <div>
       <v-btn large color="secondary" dark @click="save">Save</v-btn> <v-btn v-if="!isCreation" large @click="cancelEdit">Cancel</v-btn>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
  export default {
    name: 'MovieForm',
    props: {
      movie: {
        type: Object,
        default: () => {}
      },
      isCreation: {
        type: Boolean
      },
      heading: {
        type: String
      }
    },
    data() {
      return {
        movieData: {}
      }
    },
    watch: {
      movie(current) {
        this.movieData = current
      }
    },
    created() {
      if(this.isCreation) {
        this.movieData = {
          title: '',
          releaseDate: '',
          summary: '',
          picture: ''
        }
      }
      this.getGenresAction()
    },
    
    computed: {
      ...mapState(['genres', 'movie'])
    },

    methods: {
      ...mapActions(['updateMovieAction', 'getGenresAction', 'addMovieAction']),
      cancelEdit() {
        this.$router.back()
      },
      async save() {
        if(this.isCreation) {
          await this.addMovieAction(this.movieData)
          this.$router.push(`/movies/${this.movie.id}`)
        } else {
          await this.updateMovieAction(this.movieData)
          // this.$emit('save', this.clonedMovie)
          this.$router.push(`/movies/${this.movie.id}`)
        }
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
    input, select, textarea {
      padding: 12px;
      font-size: inherit;
      border-radius: 7px;
      outline: none;
      border: 1px solid #d8d8d8;
      width: 85%
    }

    textarea {
      height: 100px
    }

    button {
      width: 30%;
      margin: 10px;
    }
  }
</style>