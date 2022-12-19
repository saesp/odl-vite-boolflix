<script>
import Movie from './Movie.vue'
import { store } from '../store.js'

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
    <input @keyup="$emit('search')" v-model="store.valueSearch" type="search">
    <button @click="$emit('search')"></button>
    <div class="container" v-for="(movie, index) in store.moviesList" :key="index">
        <Movie :info="movie" />
    </div>
</template>

<style lang="scss" scoped>

</style>