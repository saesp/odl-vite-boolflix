<script>
export default {
    name: "MoviesList",
    props: ["info"],
}
</script>

<template>

    <div if="" class="card-movie">
        <img class="img-movie" :src="`https://image.tmdb.org/t/p/w185/${info.poster_path}`" alt="">

        <ul class="info-movie">
            <li><strong>Titolo: </strong> "{{ info.title }}"</li>

            <li><strong>Titolo originale: </strong> "{{ info.original_title }}"</li>

            <li>
                <strong>Lingua originale: </strong> <img class="flag" :src="`/src/img/${info.original_language}.svg`"
                    alt="">
            </li>

            <!-- round off number and divide by 2 -->
            <li><strong>Voto: </strong> {{ Math.round(info.vote_average / 2) }}/5</li>
        </ul>
    </div>

</template>

<style lang="scss" scoped>
// @use '../style.scss' as *;
.card-movie {
    position: relative;
    cursor: pointer;

    &:hover .info-movie {
        bottom: 0;
        height: 100%;
        top: 0;
        left: 4px;
        padding: 20px;
    }

    &:hover .img-movie {
        opacity: 0.3;
    }
}

.info-movie {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: .5s ease;

    li {
        margin-bottom: 10px;
    }
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