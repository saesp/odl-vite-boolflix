import { reactive } from 'vue'

export const store = reactive({
    moviesList: [],
    title: "BoolFlix",
    apiURL: "https://api.themoviedb.org/3/movie/550?api_key=d724d9a3e0faf23928324d1fe5b4faa5"
})