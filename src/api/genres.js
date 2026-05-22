import {setUpRequest, BASE_URL as url } from "./config";

/**
 * Returns a new map where:
 * key = genre id
 * value = genre name
 * @returns {Promise<Map<number, string>>}
 */
export default async function getGenres() {
    try {
        const response = await fetch(`${url}/genre/movie/list?language=en`, setUpRequest("GET"))
        const data = await response.json()
        if (!response.ok) throw new Error(data.status_message)
        return new Map(data?.genres.map(m => [m.id, m.name]))
    } catch (err) {
        console.log(err);
    }
}