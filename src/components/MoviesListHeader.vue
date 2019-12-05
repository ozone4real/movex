<template>
  <div class="movies-list-header">
    <div class="title">
      <h3>Title</h3>
    </div>
    <div class="genre">
      <h3>Genre</h3>
    </div>
    <div class="release-date">
      <h3>Release Date</h3>
    </div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'MoviesListHeader'
  }
</script>

<style lang="scss" scoped>
  .movies-list-header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background-color: #40B883;
    color: white;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px;
    div {
      width: 24%;
      text-align: center
    }
  }

</style>