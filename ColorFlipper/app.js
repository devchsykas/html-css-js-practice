const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

/**
 * The getRandomNumber function returns a random number between 0 and the length of the colors array.
 * @returns a random number.
 */
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
/* The code `btn.addEventListener('click', function() { ... })` is adding an event listener to the
`btn` element. When the button is clicked, the function inside the event listener is executed. */
btn.addEventListener('click', function() {
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})