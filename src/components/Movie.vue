<script>
import { store } from '../store.js'

export default {
    name: "MoviesList",

    props: ["info"],
}
</script>

<template>
    <div>
        <img :src="`https://image.tmdb.org/t/p/w200/${info.poster_path}`" alt="">
        <div>{{ info.id }}</div>
    </div>
</template>

<style lang="scss" scoped>
// @use '../style/general.scss' as *;
</style>