const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Aviator",
    price: "171.00",
    descriptions: [
      "<b>FRAME SHAPE:</b> Pilot",
      "<b>COLOR:</b> Polished Gold",
      "<b>MATERIAL:</b> Metal",
      "<b>TEMPLE COLOR:</b> Gold",
      "<b> LENS:</b> Black | Blue",
    ],
    colors: [
      {
        code: "black",
        img: "./img/classic.png",
      },
      {
        code: "skyblue",
        img: "./img/classic-blue.png",
      },
    ],
  },
  {
    id: 2,
    title: "Wayfarer",
    price: 160,
    descriptions: [
      "<b>FRAME SHAPE:</b> Square",
      "<b>COLOR:</b> Polished Black | Havana",
      "<b>MATERIAL:</b> Acetate",
      "<b>TEMPLE COLOR:</b> Black | Havana",
      "<b> LENS:</b> Black | Orange",
    ],
    colors: [
      {
        code: "black",
        img: "./img/wayfarer.png",
        txt: "more text should be here",
      },
      {
        code: "orange",
        img: "./img/wayfarer-orange.png",
      },
    ],
  },
  {
    id: 3,
    title: "Bill",
    price: 109,
    descriptions: [
      "<b>FRAME SHAPE:</b> Square",
      "<b>COLOR:</b> Polished Blue On Transparent",
      "<b>MATERIAL:</b> Acetate",
      "<b>TEMPLE COLOR:</b> Blue | Leopard",
      "<b> LENS:</b> Dark Gray | Tortoise",
    ],
    colors: [
      {
        code: "gray",
        img: "./img/bill-white.png",
      },
      {
        code: "tortoise",
        img: "./img/bill-lepord.png",
      },
    ],
  },
  {
    id: 4,
    title: "Caravan",
    price: 200,
    descriptions: [
      "<b>FRAME SHAPE:</b> Square",
      "<b>COLOR:</b> Polished Silver | Black",
      "<b>MATERIAL:</b> Metal",
      "<b>TEMPLE COLOR:</b> Silver | Black",
      "<b> LENS:</b> Clear",
    ],
    colors: [
      {
        code: "silver",
        img: "./img/caravan.png",
      },
      {
        code: "black",
        img: "./img/caravan-black.png",
      },
    ],
  },
  {
    id: 5,
    title: "ClubMaster",
    price: 171,
    descriptions: [
      "<b>FRAME SHAPE:</b> Square",
      "<b>COLOR:</b> Polished Red Havana | Black",
      "<b>MATERIAL:</b> Acetate",
      "<b>TEMPLE COLOR:</b> Red Havana | Black",
      "<b> LENS:</b> Green | Light Green",
    ],
    colors: [
      {
        code: "green",
        img: "./img/clubmaster.png",
      },
      {
        code: "lightgreen",
        img: "./img/clubemaster-gold.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductText = document.querySelector(".textList");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translate(${-100 * index}vw)`;

    //change the chosen product
    choosenProduct = products[index];

    //Change texts of current product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // Assign new colors
    currentProductColors.forEach((colors, index) => {
      colors.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

// Select the product description element
const productDesc = document.querySelector(".productDesc");

// Update product details and description for the initial product (first in the array)
function updateProductDetails(index) {
  choosenProduct = products[index];

  currentProductTitle.textContent = choosenProduct.title;
  currentProductPrice.textContent = "$" + choosenProduct.price;
  currentProductImg.src = choosenProduct.colors[0].img;

  if (choosenProduct.descriptions) {
    productDesc.innerHTML = choosenProduct.descriptions.join("<br>");
  } else {
    productDesc.textContent = "No description available";
  }
}

// Add an event listener for each menu item
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translate(${-100 * index}vw)`;
    updateProductDetails(index);
  });
});

// Initialize with the first product
updateProductDetails(0);

// Payment box that opens on Button click
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// Flashing advertising navMid
const listItems = document.querySelectorAll(".Mid li");
let currentIndex = 0;

function showNextItem() {
  listItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.style.opacity = 1;
    } else {
      item.style.opacity = 0.02;
    }
  });
  currentIndex = (currentIndex + 1) % listItems.length;
}

setInterval(showNextItem, 2000); // Change item every 5 seconds
showNextItem(); // Show the first item immediately

function toggleHeart() {
  let solidHeartImage = document.getElementById("solidHeart");

  if (solidHeartImage.src.endsWith("heart-regular.svg")) {
    solidHeartImage.src = "img/heart-solid.svg";
  } else {
    solidHeartImage.src = "img/heart-regular.svg";
  }
}

let itemCount = 0;

function addToBag() {
  itemCount++;
  updateCartBadge();
  confirmation();
}
function confirmation() {
  alert("Added to cart");
}

function updateCartBadge() {
  const cartBadge = document.getElementById("cart-badge");
  cartBadge.textContent = itemCount;
}

function showCart() {
  alert(`Items in the bag: ${itemCount}`);
}

// feature update to include seperate item cart page,
// this new page will review over what was added to cart before checkout
