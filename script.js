const dropdDown = document.querySelector(".dropdown");
const navItem = document.querySelector(".nav-item");

dropdDown.addEventListener("click", () => {
    if (dropdDown.classList.contains("active")) {
        navItem.classList.remove("active");
        dropdDown.classList.remove("active");
    } else {
        navItem.classList.add("active");
        dropdDown.classList.add("active");
    }
})

document.addEventListener("click", (e) => {
    if (!navItem.contains(e.target) && !dropdDown.contains(e.target)) {
        navItem.classList.remove("active");
        dropdDown.classList.remove("active");
    }
})


function getRandomBrightColor() {
    const r = Math.floor(Math.random() * 156) + 100;
    const g = Math.floor(Math.random() * 156) + 100;
    const b = Math.floor(Math.random() * 156) + 100;
    return `rgb(${r}, ${g}, ${b})`;
}

function changeBackgroundColor() {
    const div = document.getElementById('random-bg');
    div.style.backgroundColor = getRandomBrightColor();
}

setInterval(changeBackgroundColor, 5000);

// AUTOSCROLL
const container = document.getElementById('scroll-container');
let scrollSpeed = 1;

function scrollImages() {
    container.scrollLeft += scrollSpeed;

    // Jika scroll mencapai setengah dari total lebar konten, reset scrollLeft ke 0
    if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
    }

    requestAnimationFrame(scrollImages);
}

scrollImages();
