let images = [{
    url: "images/1.png",
    city: "Rostov-on-Don <br>LCD admiral",
    repairTime: "3.5 months",
    apartmentArea: "81 m2",
    repairCost: "Upon request",
    link: "Rostov-on-Don, Admiral"
  }, {
    url: "images/2.png",
    city: "Sochi <br>Thieves",
    repairTime: "4 months",
    apartmentArea: "105 m2",
    repairCost: "Upon request",
    link: "Sochi Thieves"
  }, {
    url: "images/3.png",
    city: "Rostov-on-Don <br>Patriotic",
    repairTime: "3 months",
    apartmentArea: "93 m2",
    repairCost: "Upon request",
    link: "Rostov-on-Don, Patriotic"
}];

function initSlider() {
    if (!images || !images.length) return;

    let sliderImages = document.querySelector(".images");
    let sliderItems = document.querySelector(".navigator");
    let sliderDots = sliderItems.querySelector(".navigator__dots");
    let city = document.querySelector('.city');
    let repairTime = document.querySelector('.repair-time');
    let apartmentArea = document.querySelector('.apartment-area');
    let repairCost = document.querySelector('.repair-cost');
    let sliderLinks = document.querySelector('.links');

    initImages();
    initArrows();
    initDots();
    initTitles();
    initLinks();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    };

    function initArrows() {
        sliderItems.querySelectorAll(".navigator__arrow").forEach(arrow => {
            arrow.addEventListener("click", function() {
                let curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("left")) {
                    nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
                };
                moveSlider(nextNumber);
            });
        });
    };

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="navigator__dot n${index} ${index === 0? "dot__active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".navigator__dot").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);
                sliderDots.querySelector(".dot__active").classList.remove("dot__active");
                this.classList.add("dot__active");
            });
        });
    };

    function initTitles() {
        images.forEach((image, index) => {
            let cityDiv = `<div class="topic__text n${index} ${index === 0? "topic-text__active" : ""}" data-index="${index}">${images[index].city}</div>`;
            city.innerHTML += cityDiv;
            let repairTimeDiv = `<div class="topic__text n${index} ${index === 0? "topic-text__active" : ""}" data-index="${index}">${images[index].repairTime}</div>`;
            repairTime.innerHTML += repairTimeDiv;
            let apartmentAreaDiv = `<div class="topic__text n${index} ${index === 0? "topic-text__active" : ""}" data-index="${index}">${images[index].apartmentArea}</div>`;
            apartmentArea.innerHTML += apartmentAreaDiv;
            let repairCostDiv = `<div class="topic__text n${index} ${index === 0? "topic-text__active" : ""}" data-index="${index}">${images[index].repairCost}</div>`;
            repairCost.innerHTML += repairCostDiv;
        });
    };

    function initLinks() {
        images.forEach((image, index) => {
            let linkItem = `<p class="links__link n${index} ${index === 0? "link__active" : ""}" data-index="${index}">${images[index].link}</p>`
            sliderLinks.innerHTML += linkItem;
        });
        sliderLinks.querySelectorAll(".links__link").forEach(link => {
            link.addEventListener("click", function() {
                moveSlider(this.dataset.index);
                sliderLinks.querySelector(".link__active").classList.remove("link__active");
                this.classList.add("link__active");
            });
        });
    };

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        sliderDots.querySelector(".dot__active").classList.remove("dot__active");
        sliderDots.querySelector(".n" + num).classList.add("dot__active");
        city.querySelector(".topic-text__active").classList.remove("topic-text__active");
        city.querySelector(".n" + num).classList.add("topic-text__active");
        repairTime.querySelector(".topic-text__active").classList.remove("topic-text__active");
        repairTime.querySelector(".n" + num).classList.add("topic-text__active");
        apartmentArea.querySelector(".topic-text__active").classList.remove("topic-text__active");
        apartmentArea.querySelector(".n" + num).classList.add("topic-text__active");
        repairCost.querySelector(".topic-text__active").classList.remove("topic-text__active");
        repairCost.querySelector(".n" + num).classList.add("topic-text__active");
        sliderLinks.querySelector(".link__active").classList.remove("link__active");
        sliderLinks.querySelector(".n" + num).classList.add("link__active");
    };

};

document.addEventListener("DOMContentLoaded", () => {
    initSlider();
});