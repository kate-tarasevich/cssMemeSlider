const slides = [
    {
        image: "img/1.jpg",
        text: "When your landlord says no dogs allowed"
    },
    {
        image: "img/2.jpg",
        text: "When mom called you a good boy"
    },
    {
        image: "img/3.jpg",
        text: "Mom: Smile nice for picture day<br>Dog: Okay, mom"
    },
    {
        image: "img/4.jpg",
        text: "Yes, I've been having fun, why do you ask?"
    }
];
const sliderImage = document.getElementById("slider-image");
const sliderText = document.getElementById("slider-text");
const controlButtons = document.querySelectorAll(".btn");

let currentIndex = 0;

function showItem(index) {
    sliderImage.src = slides[index].image;
    sliderText.innerHTML = slides[index].text;

    controlButtons.forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
        btn.classList.toggle("unactive", i !== index);
    });
}

controlButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentIndex = index;
        showItem(currentIndex);
    });
});

showItem(currentIndex);