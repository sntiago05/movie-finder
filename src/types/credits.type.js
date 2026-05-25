/**
 * @typedef {Object} CastMember
 *
 * @property {boolean} adult
 * @property {number} gender
 * @property {number} id
 * @property {string} known_for_department
 * @property {string} name
 * @property {string} original_name
 * @property {number} popularity
 * @property {string} profile_path
 * @property {number} cast_id
 * @property {string} character
 * @property {string} credit_id
 * @property {number} order
 */

/**
 * @typedef {Object} CrewMember
 *
 * @property {boolean} adult
 * @property {number} gender
 * @property {number} id
 * @property {string} known_for_department
 * @property {string} name
 * @property {string} original_name
 * @property {number} popularity
 * @property {string} profile_path
 * @property {string} credit_id
 * @property {string} department
 * @property {string} job
 */

/**
 * @typedef {Object} MovieCreditsResponse
 *
 * @property {number} id
 * @property {CastMember[]} cast
 * @property {CrewMember[]} crew
 */

export const MovieCreditsResponse = {};
export const CastMember = {}