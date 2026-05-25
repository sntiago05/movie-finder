/**
 * @typedef {Object} Genre
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef {Object} ProductionCompany
 *
 * @property {number} id
 * @property {string} logo_path
 * @property {string} name
 * @property {string} origin_country
 */

/**
 * @typedef {Object} SpokenLanguage
 *
 * @property {string} english_name
 * @property {string} iso_639_1
 * @property {string} name
 */

/**
 * @typedef {Object} MovieDetails
 *
 * @property {boolean} adult
 * @property {string} backdrop_path
 * @property {number} budget
 * @property {Genre[]} genres
 * @property {string} homepage
 * @property {number} id
 * @property {string} imdb_id
 * @property {string[]} origin_country
 * @property {string} original_language
 * @property {string} original_title
 * @property {string} overview
 * @property {number} popularity
 * @property {string} poster_path
 * @property {ProductionCompany[]} production_companies
 * @property {string} release_date
 * @property {number} revenue
 * @property {number} runtime
 * @property {SpokenLanguage[]} spoken_languages
 * @property {string} status
 * @property {string} tagline
 * @property {string} title
 * @property {boolean} video
 * @property {number} vote_average
 * @property {number} vote_count
 */

export const MovieDetails = {};