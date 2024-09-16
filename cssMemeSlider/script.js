if (confirm("Сори, не заметила, что надо ссылку на pull request оставлять, она будет по ссылке")) {
    window.location.href = "https://github.com/kate-tarasevich/cssMemeSlider/pull/1";
}
const slides = [
    {
        image: "img/1.jpg",
        text: "When your landlord says no dogs allowed"
    },
    {
        image: "img/2.jpg",
        text: "When mom called you a good girl"
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
const controlWrapper = document.querySelectorAll(".btn-wrapper");

let currentIndex = 0;

function showItem(index) {
    sliderImage.style.opacity = 0;
    sliderText.style.opacity = 0;

    setTimeout(() => {
        sliderImage.src = slides[index].image;
        sliderText.innerHTML = slides[index].text;
        sliderImage.style.opacity = 1;
        sliderText.style.opacity = 1;
    },400)


    controlButtons.forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
        btn.classList.toggle("unactive", i !== index);
    });

    currentIndex = index;
}

controlWrapper.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if(index !== currentIndex) {
            showItem(index);
        }
    });
});

showItem(currentIndex);