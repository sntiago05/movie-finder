export default function movieDetailsPage(id) {
    return `
    <div class="min-h-screen bg-zinc-950 text-white">

      <!-- Spacer for Navbar -->
      <div class="h-24">${id}</div>

      <!-- Hero -->
      <section class="relative h-[70vh] overflow-hidden">

        <img
          src=""
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
              src=""
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
                  Movie Title
                </h1>

                <p class="text-zinc-300 text-lg">
                  Movie tagline goes here
                </p>

              </div>

              <!-- Metadata -->
              <div
                class="flex flex-wrap gap-3 text-sm text-zinc-300"
              >
                <span>⭐ 8.5</span>
                <span>•</span>
                <span>2026</span>
                <span>•</span>
                <span>2h 10m</span>
                <span>•</span>
                <span>Action, Thriller</span>
              </div>

              <!-- Overview -->
              <p
                class="text-zinc-300 leading-relaxed max-w-2xl"
              >
                Movie overview...
              </p>

              <!-- Actions -->
              <div class="flex flex-wrap gap-4 pt-2">

                <button
                  class="bg-sky-500 hover:bg-sky-600 transition px-6 py-3 rounded-xl font-semibold"
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
      </section>

      <!-- Navigation -->
      <section
        class="px-6 md:px-16 py-8 flex justify-between"
      >

        <button
          class="bg-zinc-900 hover:bg-zinc-800 transition px-5 py-3 rounded-xl border border-zinc-800"
        >
          ← Previous
        </button>

        <button
          class="bg-zinc-900 hover:bg-zinc-800 transition px-5 py-3 rounded-xl border border-zinc-800"
        >
          Next →
        </button>

      </section>

      <!-- Cast -->
      <section class="px-6 md:px-16 py-8 space-y-6">

        <h2 class="text-3xl font-bold">
          Top Cast
        </h2>

        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5"
        >

          <!-- Cast Card -->

        </div>
      </section>

      <!-- Recommendations -->
      <section class="px-6 md:px-16 py-12">

        <div
          class="flex items-center justify-between mb-6"
        >

          <h2 class="text-3xl font-bold">
            Recommended Movies
          </h2>

          <button
            class="text-sky-400 hover:text-sky-300"
          >
            View All
          </button>

        </div>

        <div
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5"
        >

          <!-- Movie Cards -->

        </div>
      </section>

    </div>
  `
}