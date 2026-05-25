import { MovieCreditsResponse } from "../types/credits.type";
import { tmdbFetch } from "./client";
/**
 * @param {number} id 
 * @returns {Promise<MovieCreditsResponse>}
 */
export async function getCredits(id) {
    return tmdbFetch(`movie/${id}/credits`)
}