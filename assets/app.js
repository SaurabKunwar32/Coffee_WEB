// ================================ For the menu ======================================

let menu = document.getElementById("menu");
let cross = document.getElementById("cross");
let item = document.querySelector(".item");

menu.addEventListener("click", () => {
  document.body.classList.add("activeNav");
});

cross.addEventListener("click", () => {
  document.body.classList.remove("activeNav");
});

item.addEventListener("click", () => {
  document.body.classList.remove("activeNav");
});

// For scrolling
let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("preview");
  } else {
    toTop.classList.remove("preview");
  }
});

//============================= for search box ============================================

let sicon = document.getElementById("c1");
let Sinput = document.querySelector(".searBox");

sicon.addEventListener("click", () => {
  Sinput.style.display = "inline-block";
  // console.log("HELLLo")
});

document.addEventListener("click", () => {
  if (!Sinput.contains(event.target) && event.target !== sicon) {
    Sinput.style.display = "none";
  }
});

// =====================================For the menu items===========================================
const menuItems = [
  {
    name: "Frappe",
    price: "$14.99",
    imgSrc: "./src/m6.jpg",
  },
  {
    name: "Expresso",
    price: "$18",
    imgSrc: "./src/m1.jpg",
  },
  {
    name: "Americano",
    price: "$8",
    imgSrc: "./src/m2.jpg",
  },
  {
    name: "Mocha",
    price: "$11",
    imgSrc: "./src/m3.jpg",
  },
  {
    name: "Milk Coffee",
    price: "$5",
    imgSrc: "./src/m4.jpg",
  },
  {
    name: "Red Coffee",
    price: "$7",
    imgSrc: "./src/m5.jpg",
  },
];

const menuContainer = document.getElementById("menu_items");

menuItems.forEach((item) => {
  const boxes = document.createElement("div");

  boxes.className = "box";

  boxes.innerHTML = `
   <img src="${item.imgSrc}" />
          <p>${item.name}</p>
          <p>${item.price}</p>
          <button class="btn">Add to cart</button>
  `;
  menuContainer.appendChild(boxes);
});

//============================================ for special items ===================================
const specialItems = [
  {
    name: "Cold Brew",
    price: "$24.99",
    imgSrc: "./src/coldBrew.jpg",
  },
  {
    name: "Red Eye",
    price: "$18.99",
    imgSrc: "./src/redEye.jpg",
  },
  {
    name: "Macchiato",
    price: "$28",
    imgSrc: "./src/macchiato.jpg",
  },
];

const container = document.getElementById("special_items");

specialItems.forEach((item) => {
  const box = document.createElement("div");

  box.className = "box";

  box.innerHTML = `
   <img src="${item.imgSrc}" />
          <p>${item.name}</p>
          <p>${item.price}</p>
          <button class="btn">Add to cart</button>
          `;

  container.appendChild(box);
});



// =============================== Data for reviews =======================================
const reviewsData = [
  {
    text: "This coffee is like a warm hug in a cup. The rich aroma fills the room, and every sip feels like a small escape. It's the perfect start to my day.",
    imgSrc: "./customers/5.jpg",
    name: "Sarah J.",
    status: "Coffee Enthusiast"
  },
  {
    text: "I never knew coffee could be so comforting until now. It's not just about the caffeine; the balanced flavors keep me coming back for more.",
    imgSrc: "./customers/2.jpg",
    name: "Mark R.",
    status: "Regular Customer"
  },
  {
    text: "Each cup is brewed to perfection. With hints of caramel, this coffee hits all the right notes, making it my go-to for mornings and afternoons.",
    imgSrc: "./customers/3.jpg", 
    name: "Emily K.",
    status: "Daily Drinker"
  },
  {
    text: "This coffee is my daily ritual. It's smooth and flavorful without being too strong. It's perfect for starting my day and enjoying during breaks.",
    imgSrc: "./customers/4.jpg", 
    name: "Nancy L.",
    status: "Loyal Fan"
  },
  {
    text: "I'm in love with the deep, bold flavor of this coffee. It's the perfect pick-me-up, whether I’m starting the morning or pushing through an afternoon slump.",
    imgSrc: "./customers/5.jpg", 
    name: "Anna S.",
    status: "Coffee Lover"
  },
  {
    text: "This coffee is perfection in a cup. Its rich, velvety texture and comforting aroma make it more than just a drink—it's an experience I crave daily.",
    imgSrc: "./customers/6.jpg", 
    name: "Jake P.",
    status: "Frequent Customer"
  }
];


// ============== Function to generate reviews dynamically
function loadReviews() {
  const swiperContainer = document.querySelector(".swiper-wrapper");

  reviewsData.forEach((review) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide", "sbox");

    slide.innerHTML = `
        <div class="review">
          <p>${review.text}</p>
        </div>
        <div class="customer-data">
          <figure>
            <img src="${review.imgSrc}" alt="review image">
          </figure>
          <div class="cname">
            <p>${review.name}</p>
            <p>${review.status}</p>
          </div>
        </div>
      `;

    swiperContainer.appendChild(slide);
  });
}

// Call the function to load reviews when the page loads
window.onload = loadReviews;


// ================================ For the reviews======================================
var swiper = new Swiper(".sipe_Cont", {
  spaceBetween: 80,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    670: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1524: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

// // ***************************animations*******************************************
ScrollReveal({
  distance: "160px",
  duration: 2000,
});

ScrollReveal().reveal(".BAcki", { origin: "top" });

ScrollReveal().reveal(".content-home", {
  origin: "left",
  delay: 200,
  interval: 200,
});
ScrollReveal().reveal(".commonT", { origin: "bottom", delay: 200 });
ScrollReveal().reveal(".About", {
  origin: "top",
  delay: 200,
  distance: "200px",
});
ScrollReveal().reveal(".menu_items .box", {
  origin: "top",
  // delay: 200,
  interval: 100,
});

