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
    <div class="container-movies">
        <div class="movie" v-for="(movie, index) in store.moviesList" :key="index">
            <Movie :info="movie" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
// @use '../style.scss' as *;

.container-movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 70px;

    .movie {
        width: calc(100% / 6 - 20px);
        margin: 10px;
    }
}
</style>