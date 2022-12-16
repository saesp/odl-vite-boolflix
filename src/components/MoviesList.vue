<script>
import Movie from './Movie.vue'
import { store } from './store.js'

export default {
    name: "MoviesList",
    components: {
        Movie
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container" v-for="(movie, index) in store.moviesList" :key="movie.index">
        <Movie :info="movie" />
    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
</style>