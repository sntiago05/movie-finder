/**
 * Renders the application navigation bar
 *
 * @returns {string}
 */
export default function navBar() {
    return `<header
        class="border-b border-zinc-800 px-4 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold tracking-wide text-sky-400">
            MovieFinder
          </h1>

          <button class="md:hidden bg-zinc-800 px-3 py-2 rounded-lg text-sm">
            Menu
          </button>
        </div>

        <div class="flex flex-col gap-3 md:flex-row md:items-center">
          <input
            type="text"
            placeholder="Search movies..."
            class="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-sky-500 transition w-full md:w-80"
          />

          <nav class="flex gap-2">
            <button
              class="bg-sky-500 hover:bg-sky-600 transition px-4 py-2 rounded-xl font-medium"
            >
              Home
            </button>

            <button
              class="bg-zinc-800 hover:bg-zinc-700 transition px-4 py-2 rounded-xl font-medium"
            >
              Favorites
            </button>
          </nav>
        </div>
      </header>`
}