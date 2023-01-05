var content = new Vue({
  el: "#content",
  data: {
    titleWeb: "Avenue",
    compStore: "component/store.html",
    compOrder: "component/order.html",
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
  },
  methods: {},
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
