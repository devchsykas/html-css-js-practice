// Select elements modal-btn, modal-overlay, close-btn
const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

// Listen for click event on modal-btn
modalBtn.addEventListener("click", function () {
  // When user clicks modal-btn add .open-modal to modal-overlay
  modalOverlay.classList.add("open-modal");
});

// Listen for click event on close-btn
closeBtn.addEventListener("click", function () {
  // When user clicks close-btn remove .open-modal from modal-overlay
  modalOverlay.classList.remove("open-modal");
});

// function openModal() {
//   modalOverlay.classList.add("open-modal");
// }

// function closeModal() {
//   modalOverlay.classList.remove("open-modal");
// }
