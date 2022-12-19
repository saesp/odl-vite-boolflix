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
      // apiUserURL = store.apiURL;

      axios
        .get(store.apiURL)
        .then(res => {
          store.moviesList = res.data.results;
        })
        .catch(err => {
          console.log("Errors", err);
        });

      if (this.store.valueSearch !== "") {
        store.apiURL = `https://api.themoviedb.org/3/search/movie?api_key=d724d9a3e0faf23928324d1fe5b4faa5&query=${store.valueSearch}`
      };
    },
  },

  mounted() {
    this.getMovies()
  }
}
</script>

<template>
  <main>
    <MoviesList @search="getMovies" />
  </main>
</template>

<style lang="scss">
// @use './style/general.scss'
</style>
