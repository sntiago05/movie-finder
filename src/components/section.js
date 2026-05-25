import { Movie } from "../types/movie.type";
/**
 * Renders a reusable content section
 *
 * @param {Object} options
 * @param {string} options.title
 * Section title
 *
 * @param {string} options.content
 * HTML markup rendered inside the grid
 *
 * @param {string} [options.font="2xl"]
 * Tailwind font size used for the section title
 *
 * @param {string} [options.grid="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"]
 * Tailwind grid classes
 *
 * @param {string} [options.padding="px-4 md:px-8 py-5"]
 * Tailwind padding classes for the section
 *
 * @param {boolean} [options.showViewAll=true]
 * Determines whether the "View All" button is rendered
 *
 * @returns {string}
 */
export default function section({
  title,
  content,
  font = "text-2xl",
  grid = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
  padding = "px-4 md:px-8 py-5",
  showViewAll = true
}) {

  return `
    <section class="${padding}">

      <div class="flex items-center justify-between mb-6">

        <h2 class="${font} font-bold">
          ${title}
        </h2>

        ${showViewAll
      ? `
              <button
                class="cursor-pointer text-sky-400 hover:text-sky-300 transition"
              >
                View All
              </button>
            `
      : ""
    }
      </div>
      <div class="grid ${grid} gap-5">
        ${content}
      </div>

    </section>
  `;
}