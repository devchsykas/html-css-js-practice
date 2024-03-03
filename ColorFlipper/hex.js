const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

/**
 * The getRandomNumberArray function returns a random number between 0 and the length of the hex array.
 * @returns a random number.
 */
function getRandomNumberArray () {
    return Math.floor(Math.random() * hex.length);
}
/* The code `btn.addEventListener('click', function() { ... })` is adding an event listener to the
`btn` element. When the button is clicked, the function inside the event listener is executed. */
btn.addEventListener('click', function() {
    let hexColor = '#';
    for (let i=0;i<6;i++) {
        hexColor += hex[getRandomNumberArray()]; 
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})