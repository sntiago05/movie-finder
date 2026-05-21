import { getImageUrl, POSTER_SIZES as ps } from "../utils/images";
import "../styles/style.css"
const key = import.meta.env.VITE_API_KEY
const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${key}`
    }
};

const response = await fetch(url, options)
const data = await response.json()
const results = data?.results
const app = document.getElementById("app")
let mensaje = ""
results.forEach(movie => {
    mensaje += `<figure><img src="${getImageUrl(ps.SMALL, movie.poster_path)}"></img></figure>`
});
app.innerHTML = mensaje
console.table(results)
console.log(results.length)