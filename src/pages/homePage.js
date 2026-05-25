import getGenres from "../api/genres"
import { getTopRatedMovies, getTrendingMovies, getUpcomingMovies } from "../api/movies"
import movieCard from "../components/movieCard"
import heroBanner from "../components/heroBanner";
import navBar from "../components/navbar";
import section from "../components/section";
export default async function homePage() {
  const [trending, upcoming, topRated, genres] = await Promise.all([
    getTrendingMovies("day"),
    getUpcomingMovies(1),
    getTopRatedMovies(),
    getGenres()
  ]);
  const trendingCards = trending.results.slice(1, 6).map(m => movieCard(m, genres)).join("")
  const upcomingCards = upcoming.results.slice(0, 5).map(m => movieCard(m, genres)).join("")
  const topRatedCards = topRated.results.slice(0, 5).map(m => movieCard(m, genres)).join("")
  return `<div class="min-h-screen bg-zinc-950 text-white">
       ${heroBanner(trending.results[0])}
       ${navBar()}
       <main>
         <!-- Trending Section -->
        ${section({
    title: "Trending Movies",
    content: trendingCards
  })}
         <!-- Upcoming Section -->
         ${section({ title: "Upcoming Movies", content: upcomingCards })}
        <!-- Top Rated Section -->
         ${section({ title: "Top Rated Movies", content: topRatedCards })}
         </main>
       </div>`
}