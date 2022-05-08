
// hover effect line bottom
const lineBar = document.querySelectorAll("li");

for (let line of lineBar ) {
    line.addEventListener("mouseover", (t) => {
        t.preventDefault();
        line.style.borderBottom = "3px solid #ffffff";
        if (line.classList.contains("list_")) {
            line.style.borderBottom = "none";
        }
    });
    line.addEventListener("mouseout", (t) => {
        t.preventDefault();
        line.style.borderBottom = "none";
    });
}

// BIG TITLE ANIMATION: fade IN 
const bigTitle = document.querySelector(".titre");
const valueOfTitle = bigTitle.textContent;
var g;
g = 0;

// SUBTITLE ANIMATION: opacity
const Subtitle = document.querySelector(".description");

function opacitySubtitle() {
    Subtitle.style.opacity = g;
    if (g < 1) {
        setTimeout("opacitySubtitle()", 100);
        g = g + 0.1;
    }
}

bigTitle.style.transform = "translateX(0%)"
opacitySubtitle();


// Animation zoom in cards
const cardImg1 = document.querySelector(".card-image-1");
const cardImg2 = document.querySelector(".card-image-2");
const cardImg3 = document.querySelector(".card-image-3");
const cardImg4 = document.querySelector(".card-image-4");
const cardImg5 = document.querySelector(".card-image-5");
const cardImg6 = document.querySelector(".card-image-6");
const cardImg7 = document.querySelector(".card-image-7");
const cardImg8 = document.querySelector(".card-image-8");
const cardImg9 = document.querySelector(".card-image-9");
const cardImg10 = document.querySelector(".card-image-10")
const cardImg11 = document.querySelector(".card-image-11");

const cardContent1 = document.querySelector(".content1");
const cardContent2 = document.querySelector(".content2");
const cardContent3 = document.querySelector(".content3");
const cardContent4 = document.querySelector(".content4");
const cardContent5 = document.querySelector(".content5");
const cardContent6 = document.querySelector(".content6");
const cardContent7 = document.querySelector(".content7");
const cardContent8 = document.querySelector(".content8");
const cardContent9 = document.querySelector(".content9");
const cardContent10 = document.querySelector(".content10");
const cardContent11 = document.querySelector(".content11");
var m = 0;


function opacityCardDescription(v) {
    v.style.opacity = k;
    if (m < 1) {
        setTimeout("opacityOfDescription()", 50);
        m = m + 0.2;
    }
}

cardImg1.addEventListener("mouseover", () => {
    cardContent1.style.display = "block";
    opacityCardDescription(cardContent1);
});
cardImg1.addEventListener("mouseout", () => {
    cardContent1.style.opacity = "0";
    cardContent1.style.display = "none";
    r = 0;
});

cardImg[1].addEventListener("mouseover", () => {
    cardContent[1].style.display = "block";
    opacityCardDescription(cardContent[1]);
});
cardImg[1].addEventListener("mouseout", () => {
    cardContent[1].style.opacity = "0";
    cardContent[1].style.display = "none";
    r = 0;
});

cardImg[2].addEventListener("mouseover", () => {
    cardContent[2].style.display = "block";
    opacityCardDescription(cardContent[2]);
});
cardImg[2].addEventListener("mouseout", () => {
    cardContent[2].style.opacity = "0";
    cardContent[2].style.display = "none";
    r = 0;
});

cardImg[3].addEventListener("mouseover", () => {
    cardContent[3].style.display = "block";
    opacityCardDescription(cardContent[0]);
});
cardImg[3].addEventListener("mouseout", () => {
    cardContent[3].style.opacity = "0";
    cardContent[3].style.display = "none";
    r = 0;
});

cardImg[4].addEventListener("mouseover", () => {
    cardContent[4].style.display = "block";
    opacityCardDescription(cardContent[0]);
});
cardImg[4].addEventListener("mouseout", () => {
    cardContent[4].style.opacity = "0";
    cardContent[4].style.display = "none";
    r = 0;
});

cardImg[4].addEventListener("mouseover", () => {
    cardContent[4].style.display = "block";
    opacityCardDescription(cardContent[0]);
});
cardImg[4].addEventListener("mouseout", () => {
    cardContent[4].style.opacity = "0";
    cardContent[4].style.display = "none";
    r = 0;
});// logo hover
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const collectionOfLogo = [
    ["./assets/logo/logof.png", "./assets/logo/logoi.png", "./assets/logo/logot.png", "./assets/logo/logoy.png"],
    ["./assets/logo/logof-white.png", "./assets/logo/logoi-white.png", "./assets/logo/logot-white.png", "./assets/logo/logoy-white.png"]
];

img1.addEventListener("mouseover", () => {img1.src = collectionOfLogo[1][0]});
img1.addEventListener("mouseout", () => {img1.src = collectionOfLogo[0][0]});

img2.addEventListener("mouseover", () => {img2.src = collectionOfLogo[1][1]});
img2.addEventListener("mouseout", () => {img2.src = collectionOfLogo[0][1]});

img3.addEventListener("mouseover", () => {img3.src = collectionOfLogo[1][2]});
img3.addEventListener("mouseout", () => {img3.src = collectionOfLogo[0][2]});

img4.addEventListener("mouseover", () => {img4.src = collectionOfLogo[1][3]});
img4.addEventListener("mouseout", () => {img4.src = collectionOfLogo[0][3]});




/////////////////////////////////////////////////////////////////////////////////////////