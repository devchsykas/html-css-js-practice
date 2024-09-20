// Items
const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "Breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm not even slightly excited to make buttermilk pancakes`,
  },
  {
    id: 2,
    title: "Diner Double",
    category: "Lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `A plant-based protein that is perfect for a meatless meal`,
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "Shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Country Delight",
    category: "Breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Pasta, Sausage, Eggs and Cinnamon`,
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "Lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Our signature item, coming at you like a ton of brontosaurs`,
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "Shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "Breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "American Classic",
    category: "Lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "Shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Steak Dinner",
    category: "Dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", () => {
  //console.log("shake and bake");
  displayMenuItems(menu);
  displayMenuButtons();
});

// function to display items
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    //console.log(item);
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title} />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
  //console.log(displayMenu);
}

function displayMenuButtons() {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  //console.log(categories);
  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id=${category}>
    ${category}
  </button>`;
    })
    .join("");
  //console.log(categoryBtns);
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");

  // filter items
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      //console.log(e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      //console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        //console.log(menuCategory.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      //console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}