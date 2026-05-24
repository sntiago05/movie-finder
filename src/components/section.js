import { Movie } from "../types/movie.type";

/**
 * Renders a movie section
 *
 * @param {string} title
 * @param {string} cardsMarkup
 *
 * @returns {string}
 */
export default function section(title, cardsMarkup) {
    return `<section class="px-4 md:px-8 py-5">
           <div class="flex items-center justify-between mb-6">
             <h2 class="text-2xl font-bold">${title}</h2>
             <button class="text-sky-400 hover:text-sky-300 transition">
               View All
             </button>
           </div>
           <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
             ${cardsMarkup}
           </div>
         </section>`
}