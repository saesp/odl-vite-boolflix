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
    <input placeholder="Cerca" @keyup="$emit('search')" @keydown="$emit('search')" @keyup.enter="$emit('search')"
        v-model="store.valueSearch" type="search">
    <!-- <button @click="$emit('search')"></button> -->
    <div class="container-movies">
        <div class="movie" v-for="(movie, index) in store.moviesList" :key="index">
            <Movie :info="movie" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
// @use '../style.scss' as *;
input {
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 0;
    padding: 6px;
    width: 40vh;
    background-color: black;
    margin: 40px;

    &:hover {
        border-color: white;
    }
}

.container-movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 50px;

    .movie {
        width: calc(100% / 6 - 20px);
        margin: 10px;
    }
}
</style>