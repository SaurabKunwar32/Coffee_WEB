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
let menuItems = [];

const showMenu = () => {
  fetch("/assets/menuItems.json")
    .then((response) => response.json())
    .then((data) => {
      menuItems = data;
      menuAddtoHTML();
    });
};

showMenu();

const menuAddtoHTML = () => {
  if (menuItems.length > 0) {
    const menuContainer = document.getElementById("menu_items");

    if (menuContainer) {
      menuContainer.innerHTML = "";

      menuItems.forEach((item) => {
        const boxes = document.createElement("div");

        boxes.className = "box";

        boxes.innerHTML = `
   <img src="${item.imgSrc}" alt="${item.alt}" />
          <p>${item.name}</p>
          <p>${item.price}</p>
          <button class="btn">Add to cart</button>
  `;
        menuContainer.appendChild(boxes);
      });
      ScrollReveal().reveal(".menu_items .box", {
        origin: "top",
        // delay: 200,
        interval: 100,
      });
    }
  }
};




//============================================ for special items ===================================
let specialItems = [];

const showSpecial = () => {
  fetch("/assets/specialItem.json")
    .then((response) => response.json())
    .then((data) => {
      specialItems = data;
      specialAddtoHTML();
    });
};

showSpecial();

const specialAddtoHTML = () => {
  if (specialItems.length > 0) {
    const container = document.getElementById("special_items");

    if (container) {
      specialItems.forEach((item) => {
        const box = document.createElement("div");

        box.className = "box";

        box.innerHTML = `
     <img src="${item.imgSrc}" alt="${item.alt}" />
            <p>${item.name}</p>
            <p>${item.price}</p>
            <button class="btn">Add to cart</button>
            `;

        container.appendChild(box);
      });
      ScrollReveal().reveal(".menu_items .box", {
        origin: "top",
        distance: "160px",
        interval: 100,
      });
    }
  }
};



// ================================ For the reviews======================================

let reviewsData = [];

const showReviews = () => {
  fetch("/assets/reviews.json")
    .then((response) => response.json())
    .then((data) => {
      reviewsData = data;
      reviewsAddtoHTML();
    })
};

showReviews();

const reviewsAddtoHTML = () => {
  if (reviewsData.length > 0) {
    const swiperContainer = document.querySelector(".swiper-wrapper");

    if (swiperContainer) {
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

      // After adding reviews, initialize or update the Swiper instance
      initializeSwiper();
    }
  }
};


const initializeSwiper = () => {
  var swiper = new Swiper(".sipe_Cont", {
    spaceBetween: 80,
    loop: true,
    autoplay: {
      delay: 3000,
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
        spaceBetween: 5,
      },
      580: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      670: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1150: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1524: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};



// // *************************** animations *******************************************
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

