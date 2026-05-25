import { MovieDetails } from "../types/details.type"
import { toHours } from "../utils/convertToHour"
import formatDate from "../utils/formatDate"
import { getYoutubeEmbedUrl } from "../utils/getVideoUrl"
import { BACKDROP_SIZES, getImageUrl, POSTER_SIZES } from "../utils/images"

/**
 * 
 * @param {MovieDetails} details 
 * @returns {string}
 */
export function heroDetails(details,key) {
    return `<section class="relative h-[70vh] overflow-hidden">
      
        <img
          src="${getImageUrl(BACKDROP_SIZES.ORIGINAL, details.backdrop_path)}"
          alt="Movie Backdrop"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <div
          class="absolute inset-0 bg-linear-to-t from-zinc-950 via-black/70 to-black/30"
        ></div>
      
        <div
          class="relative z-10 h-full flex items-end px-6 md:px-16 pb-10"
        >

          <div
            class="flex flex-col md:flex-row gap-8 items-start"
          >

            <!-- Poster -->
            <img
              src="${getImageUrl(POSTER_SIZES.XXL, details.poster_path)}"
              alt="Movie Poster"
              class="w-64 rounded-2xl shadow-2xl border border-zinc-800"
            />

            <!-- Info -->
            <div class="max-w-3xl space-y-5">
              <div class="space-y-2">
                <span
                  class="bg-sky-500 px-3 py-1 rounded-full text-sm font-medium"
                >
                  Movie
                </span>

                <h1
                  class="text-4xl md:text-6xl font-black"
                >
                  ${details.title}
                </h1>

                <p class="text-zinc-300 text-lg">
                  ${details.tagline}
                </p>

              </div>

              <!-- Metadata -->
              <div
                class="flex flex-wrap gap-3 text-sm text-zinc-300"
              >
                <span>⭐ ${details.vote_average.toFixed(1)}</span>
                <span>•</span>
                <span>${formatDate(details.release_date)}</span>
                <span>•</span>
                <span>${toHours(details.runtime)}</span>
                <span>•</span>
                <span>${details.genres.map(g => g.name).join(" - ")}</span>
              </div>

              <!-- Overview -->
              <p
                class="text-zinc-300 leading-relaxed max-w-2xl"
              >
                ${details.overview}
              </p>

              <!-- Actions -->
              <div class="flex flex-wrap gap-4 pt-2">

                <button
                  onclick="window.open('${getYoutubeEmbedUrl(key)}')"
                  class="cursor-pointer bg-sky-500 hover:bg-sky-600 transition px-6 py-3 rounded-xl font-semibold"
                >
                  ▶ Watch Trailer
                </button>

                <button
                  class="bg-zinc-800 hover:bg-zinc-700 transition px-6 py-3 rounded-xl font-semibold"
                >
                  + Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>`
}