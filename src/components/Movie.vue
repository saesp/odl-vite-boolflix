<script>
import { store } from '../store.js'

export default {
    name: "MoviesList",

    props: ["info"],
}
</script>

<template>
    <h3>{{ info.title }}</h3>
    <img :src="`https://image.tmdb.org/t/p/w200/${info.poster_path}`" alt="">
    <div>{{ info.original_title }}</div>
    <div>{{ info.original_language }}</div>
    <div>{{ info.vote_average }}</div>
</template>

<style lang="scss" scoped>
// @use '../style/general.scss' as *;
</style>