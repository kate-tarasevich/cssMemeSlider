const contentItems = document.querySelectorAll(".item");
const controlButtons = document.querySelectorAll(".btn");

let currentIndex = 0;

function showItem(index) {
    contentItems.forEach((item, i) => {
        item.classList.toggle("item-active", i === index);
    });

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
