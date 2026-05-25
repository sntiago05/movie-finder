import { MovieVideosResponse } from "../types/movie.type"
import { tmdbFetch } from "./client"
/**
 * 
 * @param {number} id 
 * @returns {Promise<MovieVideosResponse>}
 */
export async function getVideos(id) {
    return tmdbFetch(`movie/${id}/videos`)
}