export function handleNavigation(e) {
    const detailsBtn = e.target.closest(".btn-details");
    if (detailsBtn) {
        const movieId = detailsBtn.dataset.id;
        window.location.hash = `#/movie/${movieId}`;
        return;
    }
}