import { setUpRequest, BASE_URL as url } from "./config"
import { Movie, TrendingMoviesResponse, UpcomingMoviesResponse, TopRatedMoviesResponse } from "../types/movie.type"
import { tmdbFetch } from "./client"

/**
 * Fetch trending movies from TMDB
 * @param {"day"|"week"} timeWindow
 * @param {number} page
 * @returns {Promise<TrendingMoviesResponse>}
 */
export async function getTrendingMovies(timeWindow, page = 1) {
    return tmdbFetch(`/trending/movie/${timeWindow}?language=en-US&page=${page}`)
}
/**
 * Fetch upcoming movies from TMDB
 * 
 * @param {number} page
 * @returns {Promise<UpcomingMoviesResponse>}
 */
export async function getUpcomingMovies(page = 1) {
    return tmdbFetch(`/movie/upcoming?language=en-US&page=${page}`)
}

/**
 * Fetch top rated movies from TMDB
 * 
 * @param {number} page
 * @returns {Promise<TopRatedMoviesResponse>}
 */
export async function getTopRatedMovies(page = 1) {
    return tmdbFetch(`/movie/top_rated?page=${page}`)
}

