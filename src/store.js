import { reactive } from 'vue'

export const store = reactive({
    moviesList: [],
    valueSearch: "",
    title: "BoolFlix",
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=d724d9a3e0faf23928324d1fe5b4faa5&query=say"
})