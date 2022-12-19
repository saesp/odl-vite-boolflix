<script>
export default {
    name: "MoviesList",
    props: ["info"]
}
</script>

<template>
    <div>
        <img :src="info.poster_path" alt="">
        <div>{{ info.popularity }}</div>
    </div>
</template>

<style lang="scss" scoped>
// @use '../style/general.scss' as *;
</style>