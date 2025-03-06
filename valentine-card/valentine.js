/**
 * Get the elements
 */
const envelop = document.getElementById("envelope");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

/**
 * Opens or closes the envelope by toggling the "open" and "close" classes.
 *
 * @function open
 * @returns {void}
 *
 * @example
 * open(); // Toggling the envelope's classes to open or close it.
 */
function open() {
  envelop.classList.add("open");
  envelop.classList.remove("close");
}

/**
 * Closes the envelope by removing the "open" class and adding the "close" class.
 *
 * @function close
 * @returns {void}
 *
 * @example
 * close(); // Closing the envelope by updating its classes.
 */
function close() {
  envelop.classList.remove("open");
  envelop.classList.add("close");
}

/* adding event listeners to the elements */
envelop.addEventListener("click", open);
openBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);
