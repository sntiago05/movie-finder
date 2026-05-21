import routes from "./routes";
import movieDetailsPage from "../pages/movieDetailsPage";
import notFoundPage from "../pages/notFoundPage";
const app = document.getElementById("app")
export default function router() {
    if (!window.location.hash) {
        window.location.hash = "/home";
        return;
    }

    const hash = window.location.hash

    if (hash.startsWith("#/movie/")) {
        const id = hash.split("/")[2]
        app.innerHTML = movieDetailsPage(id)
        return
    }

    const page = routes[hash]
    if (page) {
        app.innerHTML = page()
    } else {
        app.innerHTML = notFoundPage()
    }
}