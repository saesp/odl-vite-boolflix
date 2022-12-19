<script>
export default {
    name: "MoviesList",

    props: ["info"],
}
</script>

<template>
    <h3>{{ info.title }}</h3>
    <img :src="`https://image.tmdb.org/t/p/w200/${info.poster_path}`" alt="">
    <div>{{ info.original_title }}</div>
    <div class="flag"> <img :src="`/src/img/${info.original_language}.svg`" alt=""> </div>
    <div>{{ info.vote_average }}</div>
</template>

<style lang="scss" scoped>
// @use '../style/general.scss' as *;
.flag {
    img {
        width: 40px;
    }
}
</style>