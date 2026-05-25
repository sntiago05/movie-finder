import { getCredits } from "../api/credits";
import { getMovieDetails, getMovieRecommendations } from "../api/movies";
import { getVideos } from "../api/videos";
import castCard from "../components/castCard";
import movieCard from "../components/movieCard"
import { heroDetails } from "../components/heroDetails";
import navBar from "../components/navbar";
import section from "../components/section";
import getGenres from "../api/genres";

export default async function movieDetailsPage(id) {
  const [details, videos, credits, recommended, genres] = await Promise.all([
    getMovieDetails(id),
    getVideos(id),
    getCredits(id),
    getMovieRecommendations(id),
    getGenres()
  ])
  const recommendedCards = recommended.results.slice(0, 5).map(m => movieCard(m, genres)).join("")
  const key = videos.results.filter(v => v.type.toLowerCase() === "trailer" && v.site.toLowerCase() === "youtube")[0]?.key
  const cards = credits.cast.slice(0, 6).map(actor => castCard(actor)).join("")

  return `
    <div class="min-h-screen bg-zinc-950 text-white">

      <!-- Spacer for Navbar -->
       <div class="h-24">${navBar()}</div>
      <!-- Hero -->
      ${heroDetails(details, key)}
      <!-- Cast -->
      ${section({
    title: "Top Cast",
    content: cards,
    font: "text-4xl",
    grid: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6",
    padding: "px-6 md:px-16 py-8",
    showViewAll: false
  })}

      <!-- Recommendations -->
     ${section({
    title: "Recommended Movies",
    content: recommendedCards,
    font: "text-4xl",
    padding: "px-6 md:px-16 py-12"
  })}
    </div>
  `
}