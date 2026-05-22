import routes from "./routes";
import movieDetailsPage from "../pages/movieDetailsPage";
import notFoundPage from "../pages/notFoundPage";
const app = document.getElementById("app")
export default async function router() {
    if (!window.location.hash) {
        window.location.hash = "/home";
        return;
    }

    const hash = window.location.hash

    if (hash.startsWith("#/movie/")) {
        const id = hash.split("/")[2]
        app.innerHTML = await movieDetailsPage(id)
        return
    }

    const page = routes[hash]
    if (page) {
        app.innerHTML = await page()
    } else {
        app.innerHTML = notFoundPage()
    }
}