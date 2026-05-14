// ============================
// MOBILE MENU TOGGLE
// ============================

const menuBtn = document.createElement("button");
menuBtn.innerHTML = "☰";
menuBtn.classList.add("menu-btn");

const headerInner = document.querySelector(".header-inner");
const actions = document.querySelector(".actions");

headerInner.prepend(menuBtn);

menuBtn.addEventListener("click", () => {
  actions.classList.toggle("show-menu");
});

// ============================
// SEARCH FUNCTIONALITY
// ============================

const searchInput = document.querySelector(".search-bar input");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  productCards.forEach((card) => {
    const title = card
      .querySelector(".product-title")
      .textContent.toLowerCase();

    if (title.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// ============================
// CART FUNCTIONALITY
// ============================

let cartCount = 0;

const cartBtn = document.querySelectorAll(".action-btn")[1];

productCards.forEach((card) => {
  const addBtn = document.createElement("button");

  addBtn.innerText = "Add to Cart";
  addBtn.classList.add("add-cart-btn");

  card.appendChild(addBtn);

  addBtn.addEventListener("click", () => {
    cartCount++;

    cartBtn.innerText = `Cart (${cartCount})`;

    addBtn.innerText = "Added ✓";

    setTimeout(() => {
      addBtn.innerText = "Add to Cart";
    }, 1500);
  });
});

// ============================
// HERO BANNER SLIDER
// ============================

const bannerImages = [
  "banner.webp",
  "banner2.webp",
  "banner3.webp",
  "banner4.webp",
  "banner5.webp",
  "banner6.webp"
];

let currentBanner = 0;

const heroImage = document.querySelector(".hero-banner img");

setInterval(() => {
  currentBanner++;

  if (currentBanner >= bannerImages.length) {
    currentBanner = 0;
  }

  heroImage.src = bannerImages[currentBanner];
}, 3000);

// ============================
// SCROLL TO TOP BUTTON
// ============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});