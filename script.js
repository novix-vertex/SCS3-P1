
const carousel = document.getElementById("carousel");

const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");

const indicator1 = document.getElementById("indicator1");
const indicator2 = document.getElementById("indicator2");

const playIcon = document.getElementById("play-ic");
const pauseIcon = document.getElementById("pause-ic");


function scrollToLeft() {
    carousel.scrollBy({
        left: -carousel.offsetWidth,
        behavior: "smooth"
    });

    indicator1.className = "ri-circle-fill";
    indicator2.className = "ri-circle-line";

}

function scrollToRight() {
    carousel.scrollBy({
        left: carousel.offsetWidth,
        behavior: "smooth"
    });

    indicator1.className = "ri-circle-line";
    indicator2.className = "ri-circle-fill";

}
leftArrow.addEventListener("click", () => {
    scrollToLeft();
});

rightArrow.addEventListener("click", () => {
    scrollToRight();
});


let i = 0;

let intervalId;
let startCarousel = function () {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        {
            if (i == 0) {
                scrollToRight();
                i = 1;
            } else {
                scrollToLeft();
                i = 0;
            }
        }
    }, 2000);
};

startCarousel();

playIcon.addEventListener("click", () => {
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
    startCarousel();
});

pauseIcon.addEventListener("click", () => {
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
    clearInterval(intervalId);
});

