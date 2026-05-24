/**
 * @typedef {Object} Movie
 *
 * @property {boolean} adult
 * @property {string} backdrop_path
 * @property {number[]} genre_ids
 * @property {number} id
 * @property {string} media_type
 * @property {string} original_language
 * @property {string} original_title
 * @property {string} overview
 * @property {number} popularity
 * @property {string} poster_path
 * @property {string} release_date
 * @property {boolean} video
 * @property {number} vote_average
 * @property {number} vote_count
 * @property {string} title


 * @typedef {Object} MoviesDates
 *
 * @property {string} maximum
 * @property {string} minimum
 


/** * 
 * @typedef {Object}  TrendingMoviesResponse 
 *  @property {number} page 
 *  @property {TrendingMovie[]} results 
 *  @property {number} total_pages 
 *  @property {number} total_results */

/**
 * @typedef {Object} UpcomingMoviesResponse
 *
 * @property {MoviesDates} dates
 * @property {number} page
 * @property {Movie[]} results
 * @property {number} total_pages
 * @property {number} total_results
 */
/**
 * @typedef {Object} TopRatedMoviesResponse
 * @property {number} page
 * @property {Movie []}results
 * @property {number} total_pages
 * @property {number} total_results
 */
export const Movie = {};
export const UpcomingMoviesResponse = {}
export const TrendingMoviesResponse = {};
export const TopRatedMoviesResponse = {};