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

            <li><strong>Overview: </strong>{{ info.overview }}</li>
        </ul>
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
        opacity: 0.2;
    }
}

.info-movie {
    display: none;
    position: absolute;
    top: 0;
    left: 4px;
    padding: 13px;

    li {
        margin-bottom: 8px;
        list-style-type: none;
        font-size: 12px;
    }
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