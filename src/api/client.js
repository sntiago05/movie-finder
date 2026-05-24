import { BASE_URL, setUpRequest } from "./config";

/**
 * Sends an HTTP request to the TMDB API
 *
 * @param {string} endpoint
 * API endpoint path
 *
 * @param {RequestInit} [request]
 * Fetch request configuration
 *
 * @returns {Promise<any>}
 *
 * @throws {Error}
 * Throws an error when the request fails
 */
export async function tmdbFetch(
    endpoint,
    request = setUpRequest("GET")) {
    const response = await fetch(`${BASE_URL}${endpoint}`, request);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.status_message);
    }

    return data;
}