const orderTrackBtn = document.getElementById("header-order-tracking-btn");

orderTrackBtn.addEventListener("click", () => {
  const orderTrackBox = document.querySelector(".order-track-box-hidden");
  orderTrackBox.classList.remove("order-track-box-hidden");
  orderTrackBox.classList.add("order-track-box-active");
});

console.log(orderTrackBox);
