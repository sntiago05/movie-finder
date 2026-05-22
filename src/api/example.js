import { getImageUrl, POSTER_SIZES as ps } from "../utils/images";
import "../styles/style.css"
const key = import.meta.env.VITE_API_KEY
//const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const response = await fetch(url, options)
const data = await response.json()

const dataMap = new Map(data?.genres.map(m=> [m.id,m.name]))
console.log(dataMap);

    