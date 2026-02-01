const orderTrackBtn = document.getElementById("header-order-tracking-btn");
const orderTrackBox = document.getElementById("order-track-box");

orderTrackBtn.addEventListener("click", () => {
  orderTrackBox.classList.remove("popup-box-hidden");
  orderTrackBox.classList.add("popup-box-active");
});

const groomingBtn = document.getElementById("header-grooming-btn");
const groomingBox = document.getElementById("grooming-box");

groomingBtn.addEventListener("click", () => {
  groomingBox.classList.remove("popup-box-hidden");
  groomingBox.classList.add("popup-box-active");
});

const orderTrackExitBtns = document.querySelectorAll(".exit-small-btn");

orderTrackExitBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    orderTrackBox.classList.remove("popup-box-active");
    orderTrackBox.classList.add("popup-box-hidden");
    groomingBox.classList.remove("popup-box-active");
    groomingBox.classList.add("popup-box-hidden");
  });
});

const searchInput = document.getElementById("searchbar");
const searchDropdown = document.getElementById("search-bar-dropdown");

searchInput.addEventListener("focus", () => {
  searchDropdown.classList.remove("search-bar-dropdown-hidden");
  searchDropdown.classList.add("search-bar-dropdown");
});

searchInput.addEventListener("blur", () => {
  searchDropdown.classList.remove("search-bar-dropdown");
  searchDropdown.classList.add("search-bar-dropdown-hidden");
});
