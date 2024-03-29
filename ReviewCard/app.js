// local reviews data

const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        review: "I was blown away by the quality of this course! The instructor is so knowledgeable and makes learning easy.",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: 'https://www.course-api.com/images/people/person-2.jpg',
        review: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        review: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        review: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ', 
    },
];

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
    displayPerson();
});

// show person based on item
function displayPerson() {
    const person = reviews[currentItem];
    img.src = person.img;
    author.textContent = person.name;
    job.textContent = person.job;
    info.textContent = person.review;
}

// show next person
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length -1) {
        currentItem = 0;
        }
    displayPerson();
})

// show previews person
prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
        }
        displayPerson();
})

// show random person
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    //console.log(currentItem);
    displayPerson();
})