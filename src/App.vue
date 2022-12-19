<script>
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
}
</script>

<template>
  <MoviesList :msg="store.title" />

  <main>

  </main>
</template>

<style lang="scss">
// @use './style/general.scss'
</style>
