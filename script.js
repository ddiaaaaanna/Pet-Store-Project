const searchInput = document.getElementById("searchbar");
const searchDropdown = document.getElementById("search-bar-dropdown");

searchInput.addEventListener("focus", () => {
  searchDropdown.classList.remove("hidden");
});

const searchBarNav = document.getElementById("search-bar-nav");

document.addEventListener("click", (event) => {
  if (!searchBarNav.contains(event.target)) {
    searchDropdown.classList.add("hidden");
  }
});

const carrouselNextBtn = document.getElementById("carousel-next");

carrouselNextBtn.addEventListener("click", () => {});
