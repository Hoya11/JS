

const images = [
    "0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)), url(${bgImage.src})`;
