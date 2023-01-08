var content = new Vue({
  el: "#content",
  data: {
    titleWeb: "Avenue",
    compOrder: "order.html",
    productsAvenue: [
      {
        id: 1,
        name: "Red Blazer",
        price: 500000,
        img: "images/woman1.jpg",
      },
      {
        id: 2,
        name: "Black Shirt",
        price: 300000,
        img: "images/jacket-jeans.jpg",
      },
      {
        id: 3,
        name: "Jacket Jeans",
        price: 500000,
        img: "images/jacket2.jpg",
      },
      {
        id: 4,
        name: "Cream Blazer",
        price: 800000,
        img: "images/woman2.jpg",
      },
    ],
    altTextLatest: "Latest Arrivals",
    collectionsAvenue: [
      {
        name: "Men",
        img: "images/man-collection.jpg",
      },
      {
        name: "Women",
        img: "images/women-collection.jpg",
      },
      {
        name: "Kid",
        img: "images/child-collection.jpg",
      },
    ],
    seasonCloth: {
      text: "Winter Is Coming",
      alt: "Winter",
      img: "images/winter.jpg",
    },
    storeOnline: [
      { alt: "Tokopedia", img: "images/tokopedia.png" },
      { alt: "Shopee", img: "images/shopee.png" },
      { alt: "Lazada", img: "images/Lazada.png" },
      { alt: "Bukalapak", img: "images/Bukalapak.png" },
    ],
    socmed: [
      { alt: "Twitter", img: "images/twitter.png" },
      { alt: "Facebook", img: "images/facebook.png" },
      { alt: "Instagram", img: "images/instagram.png" },
      { alt: "Pinterest", img: "images/pinterest.png" },
    ],
    colorRed: "red",
    // Order.html
    price: "500000",
    sizeShirt: ["S", "M", "L", "XL"],
    choosenSizeShirt: "S",
    cart: [],
    stock: 10,
    availability: true,
    qty: 1,
    plusMessage:
      "Klik tombol ini atau tekan tombol panah ke atas pada kolom disamping!",
    minusMessage:
      "Klik tombol ini atau tekan tombol panah ke bawah pada kolom disamping!",
    specShirt: [
      "Material: denim fabric",
      "Length: waist-length",
      "Sleeves: long",
      "Fastening: buttons, zippers, or a combination of both",
      "Pockets: front, sides, or chest",
      "Style: casual, versatile",
      "Occasions: suitable for a variety of occasions",
    ],
    display: "none",
  },
  methods: {
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
    addCart() {
      this.cart.push({
        name: this.productsAvenue[2].name,
        qty: this.qty,
        size: this.choosenSizeShirt,
        price: this.productsAvenue[2].price,
        img: this.productsAvenue[2].img,
        id: +new Date(),
      });
      this.stock -= this.qty;
      this.resetValue();
    },

    resetValue() {
      this.qty = 1;
      this.choosenSizeShirt = "S";
    },

    openModal() {
      this.display = "block";
    },

    closeModal() {
      this.display = "none";
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
