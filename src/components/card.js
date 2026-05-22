import getGenres from "../api/genres"
import { TrendingMovie } from "../types/movie.type"
import { getImageUrl, POSTER_SIZES } from "../utils/images"
/**
 * Renders a movie card
 *
 * @param {TrendingMovie} movie
 * @param {Map<number, string>} genres
 * @returns {string}
 */
export default function movieCard(movie, genres) {
  return ` <article
            class="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:scale-[1.02] transition"
          >
            <div class="relative">
              <img
                src="${getImageUrl(POSTER_SIZES.XXL, movie.poster_path)}"
                alt="Movie"
                class="w-full h-80 object-cover"
              />

              <span
                class="absolute top-3 right-3 bg-black/80 px-2 py-1 rounded-lg text-sm"
              >
                ⭐ ${movie.vote_average}
              </span>
            </div>

            <div class="p-4 space-y-2">
              <h3 class="font-bold text-lg line-clamp-1">${movie.title}</h3>

              <p class="text-zinc-400 text-sm">2023 • ${genres.get(movie.genre_ids[0])}</p>

              <button
                class="w-full bg-sky-500 hover:bg-sky-600 transition py-2 rounded-xl font-medium mt-3"
              >
                Details
              </button>
            </div>
          </article>`
}