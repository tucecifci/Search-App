const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#search-input");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#search-button");
const clearButton = document.querySelector("#clear-button");
const imageWrapper = document.querySelector(".image-wrapper");

runEventListener();
function runEventListener() {
  form.addEventListener("submit", search); //search butonuna basıldığında submit etmesi icin yani formu göndermesi için bir function yazmamız lazım
  clearButton.addEventListener("click", clear);
}
function clear() {
  searchInput.value = ""; //arama çubuğunu temizlemek için
  imageWrapper.innerHTML = ""; //ana ekrana gelen fotoları temizlemek için
}

function search(e) {
  const value = searchInput.value.trim(); //inputa giriler kelimeyi alabilmemizi sağlar

  //spring rest api - requestParam
  fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
    method: "GET",
    headers: {
      Authorization: "Client-ID 35VEGk6Ij1urjvjrwZi0XNSpjBvKZnIbFGEF41vNH8U",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data.results);
      Array.from(data.results).forEach((image) => {
        // console.log(image.urls.small); //bunu chrome toolda console'da yazılı olan acıklamalardan buluyoruz. örneğin, imageleri yazdırıyoruz, onun içinde urls kısmı var onun içinde fotoların birçok boyutu var onun small halini alıyoruz vs, bunu ancak chrome toolstan bakarak yapabilirsin
        addImageToUi(image.urls.small);
      });
    })
    .catch((err) => console.log(err));
  //   console.log("tuce"); //search butonuna basıldığında tuce yazısı gözükmüyor çünkü sayfanın kendini refresh etme özelliği var, bu sebeple bu otomatik gelen özelliği kapatmamız lazım
  e.preventDefault();
  //enterla arama yapabilmek için
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      search();
    }
  });
}

function addImageToUi(url) {
  const div = document.createElement("div");
  div.className = "card";
  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.height = 400;
  img.width = 400;

  div.append(img);
  imageWrapper.appendChild(div);
}
