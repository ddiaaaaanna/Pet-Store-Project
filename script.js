const orderTrackBtn = document.getElementById("header-order-tracking-btn");
const orderTrackBox = document.getElementById("order-track-box");

orderTrackBtn.addEventListener("click", () => {
  orderTrackBox.classList.remove("hidden");
});

const groomingBtn = document.getElementById("header-grooming-btn");
const groomingBox = document.getElementById("grooming-box");

groomingBtn.addEventListener("click", () => {
  groomingBox.classList.remove("hidden");
});

const popupCloseButtons = document.querySelectorAll(".popup-close-btn");

popupCloseButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    orderTrackBox.classList.add("hidden");
    groomingBox.classList.add("hidden");
  });
});

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
