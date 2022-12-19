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
    <input @keyup="$emit('search')" @keydown="$emit('search')" @keyup.enter="$emit('search')"
        v-model="store.valueSearch" type="search">
    <!-- <button @click="$emit('search')"></button> -->
    <div class="container-movies">
        <div class="movie" v-for="(movie, index) in store.moviesList" :key="index">
            <Movie :info="movie" />
        </div>
    </div>

</template>

<style lang="scss" scoped>
.container-movies {
    display: flex;
    flex-wrap: wrap;

    .movie {
        width: calc(100% / 5);
    }
}
</style>