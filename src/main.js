import { handleNavigation } from "./events/navigation"
import router from "./routes/router"
import "./styles/style.css"
window.addEventListener("load", router)
window.addEventListener("hashchange", router)
document.addEventListener("click",handleNavigation) 
