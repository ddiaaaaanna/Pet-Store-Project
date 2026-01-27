const orderTrackBtn = document.getElementById("header-order-tracking-btn");

const orderTrackBox = document.querySelector(".order-track-box-hidden");

orderTrackBtn.addEventListener("click", () => {
  orderTrackBox.classList.remove("order-track-box-hidden");
  orderTrackBox.classList.add("order-track-box-active");
});

const orderTrackExitBnt = document.getElementById("exit-small-btn");

orderTrackExitBnt.addEventListener("click", () => {
  orderTrackBox.classList.remove("order-track-box-active");
  orderTrackBox.classList.add("order-track-box-hidden");
});
