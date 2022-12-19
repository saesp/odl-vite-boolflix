<script>
import axios from 'axios'
import MoviesList from './components/MoviesList.vue'
import { store } from './store.js'

export default {
  name: "App",
  components: {
    MoviesList,
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    getMovies() {
      axios
        .get(store.apiURL)
        .then(res => {
          store.moviesList = res.data.results;
        })
        .catch(err => {
          console.log("Errori", err);
        });
    }
  },

  mounted() {
    this.getMovies()
  }
}
</script>

<template>
  <MoviesList />

  <main>

  </main>
</template>

<style lang="scss">
// @use './style/general.scss'
</style>
