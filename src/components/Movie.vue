<script>
export default {
    name: "MoviesList",
    props: ["info"],
}
</script>

<template>

    <div if="" class="card-movie">
        <img class="img-movie" :src="`https://image.tmdb.org/t/p/w185/${info.poster_path}`" alt="">

        <div class="info-movie">
            <h3><strong>Titolo: </strong> {{ info.title }}</h3>

            <div><strong>Titolo originale: </strong> {{ info.original_title }}</div>

            <span>
                <strong>Lingua originale:</strong> <img class="flag" :src="`/src/img/${info.original_language}.svg`"
                    alt="">
            </span>

            <!-- round off number and divide by 2 -->
            <div>{{ Math.round(info.vote_average / 2) }}/5</div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
// @use '../style.scss' as *;
.card-movie {
    position: relative;
    cursor: pointer;

    &:hover .info-movie {
        display: block;
    }

    &:hover .img-movie {
        opacity: 0.4;
    }
}

.info-movie {
    display: none;
    position: absolute;
    top: 0;
    left: 4px;
    padding: 10px;
}

.info-movie {
    display: none;
}

.img-movie {
    width: 100%;
    height: 300px;
    grid-row: auto;
}

.flag {
    width: 20px;
}
</style>