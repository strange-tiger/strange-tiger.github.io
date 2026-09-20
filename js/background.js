const images = [
    "0.png",
    "1.jpg",
    "2.jpg",
    "3.png",
    "4.png",
    "5.png",
]

const randomImage = Math.floor(Math.random() * images.length);
const chosenImage = images[randomImage];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url("img/${chosenImage}")`;