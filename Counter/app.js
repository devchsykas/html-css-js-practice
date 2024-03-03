// set initial count
let count = 0;

// select value and buttons
const valueDisplay = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

//console.log(valueDisplay);
//console.log(btns);

btns.forEach((btn) => {
    //console.log(btn);
    btn.addEventListener('click', (e)=>{
        //console.log(e.target.classList);
        const styles = e.currentTarget.classList;
        //console.log(styles);
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        
        if (count > 0) {
            valueDisplay.style.color = 'green';
        }

        if (count < 0) {
            valueDisplay.style.color = 'red';
        }

        if (count === 0) {
            valueDisplay.style.color = 'black';
        }

        valueDisplay.textContent = count;
    })
});