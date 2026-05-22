import { setUpRequest, BASE_URL as url } from "./config"
import { TrendingMovie } from "../types/movie.type"
/**
 * @typedef {Object} TrendingMoviesResponse
 *
 * @property {number} page
 * @property {TrendingMovie[]} results
 * @property {number} total_pages
 * @property {number} total_results
 */

/**
 * Fetch trending movies from TMDB
 * @param {"day"|"week"} timeWindow
 * @param {number} page
 * @returns {Promise<TrendingMoviesResponse>}
 */
export async function getTrendingMovies(timeWindow, page = 1) {
    try {
        const response = await fetch(`${url}/trending/movie/${timeWindow}?language=en-US&page=${page}`, setUpRequest("GET"))
        const data = await response.json()
        if (!response.ok) throw new Error(data.status_message)
        return data
    } catch (err) {
        console.log(err);
    }
}

