var content = new Vue({
  el: "#content",
  data: {
    titleWeb: "Avenue",
    compStore: "component/store.html",
    compOrder: "component/order.html",
    latestArrivalsProduct: [
      "Red Blazer",
      "Black Shirt",
      "Jacket Jeans",
      "Cream Blazer",
    ],
    latestArrivalsImg: [
      "images/woman1.jpg",
      "images/jacket-jeans.jpg",
      "images/jacket2.jpg",
      "images/woman2.jpg",
    ],
    altTextLatest: "Latest Arrivals",
    collectionsImg: [
      "images/man-collection.jpg",
      "images/women-collection.jpg",
      "images/child-collection.jpg",
    ],
    altTextCollections: ["Men", "Women", "Kid"],
    seasonClothImg: "images/winter.jpg",
    seasonClothAlt: "winter",
    seasonClothText: "Winter Is Coming",
    storeOnlineImg: [
      "images/tokopedia.png",
      "images/shopee.png",
      "images/Lazada.png",
      "images/Bukalapak.png",
    ],
    storeOnlineAlt: "Official Store",
    socmedImg: [
      "images/twitter.png",
      "images/facebook.png",
      "images/instagram.png",
      "images/pinterest.png",
    ],
    socmedAlt: ["Twitter", "Facebook", "Instagram", "Pinterest"],
    colorRed: "red",
    // Order.html
    price: "500000",
    sizeShirt: ["S", "M", "L", "XL"],
    choosenSizeShirt: "S",
    cart: 0,
    stock: 10,
    availability: true,
    qty: 0,
    plusMessage:
      "Klik tombol ini atau tekan tombol panah ke atas pada kolom disamping!",
    minusMessage:
      "Klik tombol ini atau tekan tombol panah ke bawah pada kolom disamping!",
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    changeVariant(value) {
      if (value === this.sizeShirt[0]) {
        this.stock = 10;
      } else if (value === this.sizeShirt[1]) {
        this.stock = 3;
      } else if (value === this.sizeShirt[2]) {
        this.stock = 0;
      } else if (value === this.sizeShirt[3]) {
        this.stock = 12;
      }

      this.choosenSizeShirt = value;

      if (this.stock <= 0) {
        this.availability = false;
      } else {
        this.availability = true;
      }
    },
    qtyPlus() {
      if (this.qty < this.stock) {
        this.qty += 1;
      }
    },
    qtyMinus() {
      if (this.qty > 0) {
        this.qty -= 1;
      }
    },
    buyNow() {
      window.location.href =
        "https://wa.me/6281558903315?text=Hallo%2C%20Saya%20ingin%20memesan%20%0AProduk%3A%20" +
        this.latestArrivalsProduct[2] +
        "%0ASize%3A%20" +
        this.choosenSizeShirt +
        "%0AJumlah%3A%20" +
        this.qty +
        "%0A%0ATerimakasih";
    },
  },
  computed: {},
});

const url =
  "https://api.unsplash.com/search/photos?query=model&per_page=30&client_id=AZlXqZfhUvccVCMpoiayuRV98xzI9bq0vR_RJtdtY9A";

fetch(url)
  .then((response) => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  })

  .then((data) => {
    loadImages(data);
  })

  .catch((error) => console.log(error));

loadImages = (data) => {
  for (let i = 0; i < 4; i++) {
    let image = document.createElement("div");
    image.className = "img";
    image.style.backgroundImage =
      "url(" + data.results[i].urls.raw + "&w=1366&h=768" + ")";
    image.addEventListener("dblclick", function () {
      window.open(data.results[i].links.download, "_blank");
    });
    document.querySelector("#grid").appendChild(image);
  }
};
