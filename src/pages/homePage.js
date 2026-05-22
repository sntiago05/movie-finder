import getGenres from "../api/genres"
import { getTrendingMovies } from "../api/movies"
import movieCard from "../components/card"
import heroBanner from "../components/heroBanner";
export default async function homePage() {
    /*   const [moviesResponse, genres] = await Promise.all([
           getTrendingMovies("day"),
           getGenres()
       ]);
   
       
       const cards = moviesResponse.results.slice(0,5).map(m => movieCard(m, genres)).join("")
       return `<div class="min-h-screen bg-zinc-950 text-white">
       ${heroBanner(moviesResponse.results[0])}
         <!-- Trending Section -->
         <section class="px-4 md:px-8 py-10">
           <div class="flex items-center justify-between mb-6">
             <h2 class="text-2xl font-bold">Trending Movies</h2>
             <button class="text-sky-400 hover:text-sky-300 transition">
               View All
             </button>
           </div>
           <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
             ${cards}
           </div>
         </section>
       </div>`*/
}