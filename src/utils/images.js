/**
 * @typedef {"w300"| "w780"|"w1280"|"1280"} BackDropSize
 */
export const BACKDROP_SIZES = Object.freeze({
    SMALL: "w300",
    MEDIUM: "w780",
    LARGE: "w1280",
    ORIGINAL: "original"
})
/**
 * @typedef {"w92"|"w154"|"w185"|"w342"|"w500"|"w780"|"original"} PosterSize
 */
export const POSTER_SIZES = Object.freeze({
    SMALL: "w92",
    MEDIUM: "w154",
    LARGE: "w185",
    XL: "w342",
    XXL: "w500",
    XXXL: "w780",
    ORIGINAL: "original"
})

/**
 * 
 * @param {BackDropSize|PosterSize} size 
 * @param {string} path 
 * @returns {string}
 */
export function getImageUrl(size, path) {
    return `https://image.tmdb.org/t/p/${size}${path}`
}