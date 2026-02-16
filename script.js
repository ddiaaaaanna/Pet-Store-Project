// SEARCH BAR DROPDOWN

const searchInput = document.getElementById("searchbar");
const searchDropdown = document.getElementById("search-bar-dropdown");

searchInput.addEventListener("focus", () => {
  searchDropdown.classList.remove("hidden");
});

const searchBarNav = document.getElementById("search-bar-nav");

document.addEventListener("click", (event) => {
  if (!searchBarNav.contains(event.target)) {
    searchDropdown.classList.add("hidden");
  }
});

// CAROUSEL FUNCTION

const carrouselNextBtn = document.getElementById("carousel-next");
const petCardContainer = document.querySelector(".pet-card-container");

let carrouselBtnActive = true;

carrouselNextBtn.addEventListener("click", () => {
  if (carrouselBtnActive) {
    petCardContainer.style.transform = "translateX(-435px)";
    carrouselNextBtn.textContent = "<";

    carrouselNextBtn.style.left = "-12px";
    carrouselNextBtn.style.right = "auto";
    carrouselBtnActive = false;
  } else {
    petCardContainer.style.transform = "translateX(0px)";
    carrouselNextBtn.textContent = ">";

    carrouselNextBtn.style.left = "auto";
    carrouselNextBtn.style.right = "-26px";
    carrouselBtnActive = true;
  }
});

// PET SALE PRODUCTS

const petSaleProducts = [
  {
    photo:
      "https://i5.walmartimages.com/seo/Milk-Bone-Soft-Chewy-Mini-s-Dog-Treats-Made-With-Real-Chicken-4-5-oz_ce298452-8730-4a57-b4e3-4b103d521a9e.1c89141e346edc83ad9e8ba109074b0d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    name: "Chewy Chicken Dog Treats",
    rating: 4.7,
    originalPrice: 14.99,
  },
  {
    photo:
      "https://images.baxterboo.com/global/images/products/large/petshopfringe-studio-plush-dog-toy-cant-be-ap-heart-rope-7645.webp",
    name: "Plush Heart Rope Dog Toy",
    rating: 4.5,
    originalPrice: 12.99,
  },
  {
    photo:
      "https://www.weruva.com/cdn/shop/files/1236_810192811229_20BFF_20Toodzies_20Salmon_20Flavor_202oz_3dfc75b3-5f32-4c35-9a5c-5a59baf9bf17.png?v=1755703973&width=1000",
    name: "Salmon Crunch Cat Treats",
    rating: 4.8,
    originalPrice: 9.99,
  },
  {
    photo:
      "https://shop.hauspanther.com/cdn/shop/products/7383alt2_cat-furniture-cozytunnel_RGB_2048x2048.jpg",
    name: "Cat Scratcher Tunnel",
    rating: 4.4,
    originalPrice: 19.99,
  },
  {
    photo:
      "https://hawthornpetsupplies.co.uk/wp-content/uploads/2020/05/Premium-Wild-Bird-20kg-2.png",
    name: "Bird Seed Blend Premium",
    rating: 4.6,
    originalPrice: 13.99,
  },
  {
    photo: "https://m.media-amazon.com/images/I/91fcO12KcCL.jpg",
    name: "Small Pet Hay Bundle",
    rating: 4.3,
    originalPrice: 8.99,
  },
  {
    photo:
      "https://pitbulloutfitters.com/cdn/shop/files/buffalo-plaid-dog-sweater.jpg?v=1756555353",
    name: "Plaid Dog Sweater",
    rating: 4.2,
    originalPrice: 19.99,
  },
  {
    photo:
      "https://thebluebarn.co.uk/cdn/shop/files/kittenbear.jpg?v=1706261698",
    name: "Catnip Valentine Bear Toy",
    rating: 4.1,
    originalPrice: 12.99,
  },
  {
    photo:
      "https://www.pangeareptile.com/cdn/shop/products/PHAL75boxwithbulb_1200x.jpg?v=1631807882",
    name: "Reptile Heat Lamp Bulb",
    rating: 4.5,
    originalPrice: 18.99,
  },
  {
    photo: "https://www.kroger.com/product/images/large/front/0004679877035",
    name: "Aquarium Floating Fish Pellets",
    rating: 4.6,
    originalPrice: 10.99,
  },
];

const saleSectionContent = document.getElementById("sale-section-content");

function renderSaleItems(items) {
  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "sale-section-card";

    div.innerHTML = `
    <img src = ${item.photo} alt = "Pet store sale item">
    <h3>${item.name}</h3>
    <p>${item.rating}</p>
    <p>${item.originalPrice}</p>
    `;

    saleSectionContent.appendChild(div);
  });
}

renderSaleItems(petSaleProducts);
