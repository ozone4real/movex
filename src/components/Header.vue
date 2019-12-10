<template>
  <nav>
    <router-link to="/" class="site-name"><v-icon size="30px">mdi-minidisc</v-icon>Movex</router-link>
    <router-link to="/add-movie">Add Movie</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss" scoped>
nav {
  padding: 10px 20%;
  display: flex;
  justify-content: space-between;
  background: white;
  border-bottom: 1px solid rgb(187, 187, 187);
  align-items: center;

  a {
    text-decoration: none;
    color: unset;
  }
  .site-name {
    font-weight: 700;
    font-size: 25px;
  }
}

</style>