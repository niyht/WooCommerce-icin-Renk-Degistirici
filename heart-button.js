let heart = document.getElementById("changecolor");
let body = document.querySelector("body");

let renkler = [
    "pink",
    "red",
    "black",
    "#616A6B",
    "#4A235A",
]

let rastgele = () => {
    let rastgelerenk = Math.floor(renkler.length * Math.random());
    return rastgelerenk
}

heart.addEventListener("click", () => {
    body.style.backgroundColor = renkler[rastgele()];;
})