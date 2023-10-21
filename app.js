const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Classic",
      price: 160,
      colors: [
        {
          code: "gold",
          img: "./img/classic.png",
        },
        {
          code: "royalblue",
          img: "./img/classic-blue.png",
        },
      ],
    },
    {
      id: 2,
      title: "Wayfarer",
      price: 160,
      colors: [
        {
          code: "black",
          img: "./img/wayfarer.png",
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
      colors: [
        {
          code: "silver",
          img: "./img/bill-white.png",
        },
        {
          code: "brown",
          img: "./img/bill-lepord.png",
        },
      ],
    },
    {
      id: 4,
      title: "Caravan",
      price: 200,
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
      colors: [
        {
          code: "brown",
          img: "./img/clubmaster.png",
        },
        {
          code: "gold",
          img: "./img/clubemaster-gold.png",
        },
      ],
    },
  ];

  let choosenProduct  = products[0]

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translate(${-100 * index}vw)`;

        //change the chosen product
        choosenProduct = products[index]
        
        //Change texts of current product
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img
      

        // Assign new colors
        currentProductColors.forEach((colors,index ) =>{
          colors.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});

currentProductColors.forEach((color,index) => {
  color.addEventListener("click", () =>{
    currentProductImg.src = choosenProduct.colors[index].img
  })
});



const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
payment.style.display = "flex"
})

close.addEventListener("click", ()=>{
payment.style.display = "none"
})


// Flashing advertising navMid
const listItems = document.querySelectorAll('.Mid li');
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

setInterval(showNextItem, 2200); // Change item every 5 seconds
showNextItem(); // Show the first item immediately


function toggleHeart() {
  let solidHeartImage = document.getElementById("solidHeart");
  
  if (solidHeartImage.src.endsWith("heart-regular.svg")) {
      solidHeartImage.src = "img/heart-solid.svg";
  } else {
      solidHeartImage.src = "img/heart-regular.svg";
  }
}
