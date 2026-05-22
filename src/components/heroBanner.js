import { TrendingMovie } from "../types/movie.type";
import { BACKDROP_SIZES, getImageUrl } from "../utils/images";
/**
 * Renders the application Hero Banner
 * @param {TrendingMovie} movie 
 */
export default function heroBanner(movie) {
    return ` <section class="relative h-[70vh] overflow-hidden">
        <img
          src="${getImageUrl(BACKDROP_SIZES.ORIGINAL,movie.backdrop_path)}"
          alt="Hero Banner"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <div
          class="absolute inset-0 bg-linear-to-b from-black via-black/70 to-transparent"
        ></div>

        <div class="relative z-10 h-full flex items-center px-6 md:px-16">
          <div class="max-w-2xl space-y-5">
            <span class="bg-sky-500 text-sm px-3 py-1 rounded-full font-medium">
              Trending Now
            </span>

            <h2 class="text-4xl md:text-6xl font-black leading-tight">
              ${movie.title}
            </h2>

            <p class="text-zinc-300 text-sm md:text-lg leading-relaxed">
              ${movie.overview}
            </p>

            <div class="flex flex-wrap gap-4">
              <button
                class="bg-sky-500 hover:bg-sky-600 transition px-6 py-3 rounded-xl font-semibold"
              >
                View Details
              </button>

              <button
                class="bg-zinc-800 hover:bg-zinc-700 transition px-6 py-3 rounded-xl font-semibold"
              >
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </section>`
}