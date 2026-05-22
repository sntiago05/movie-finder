export const BASE_URL = "https://api.themoviedb.org/3/"
const API_KEY = import.meta.env.VITE_API_KEY
 /**
  * Creates a configurated fetch request object
  * @param {"GET"|"PATCH"|"DELETE"} method 
  * @param {Object} [body] 
  * @returns {RequestInit}
  */
export function setUpRequest(method, body = null) {
    const config = {
        method,
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`
        }
    }
    if (body) {
        config.headers["Content-Type"] = "application/json"
        config.body = JSON.stringify(body)
    }
    return config
}