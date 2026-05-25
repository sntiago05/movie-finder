import {getImageUrl,POSTER_SIZES } from "../utils/images";

import {CastMember} from "../types/credits.type"

/**
 * Renders a cast member card
 *
 * @param {CastMember} actor
 *
 * @returns {string}
 */
export default function castCard(actor) {

  return `
    <article
      class="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden"
    >
      <img
        src="${getImageUrl(
          POSTER_SIZES.LARGE,
          actor.profile_path
        )}"
        alt="${actor.name}"
        class="w-full h-72 object-cover"
      />
      <div class="p-4">
        <h3 class="font-semibold line-clamp-1">
          ${actor.name}
        </h3>

        <p class="text-sm text-zinc-400 line-clamp-1">
          ${actor.character}
        </p>
      </div>
    </article>
  `
}