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

    if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
    }

    requestAnimationFrame(scrollImages);
}

scrollImages();



// AUTOSCTOLL POPULAR
const popular = document.getElementById('popular');
const content = popular.innerHTML; // Clone konten
popular.innerHTML += content;

let scrollAmount = 0;
const scrollSpeedPopular = 1;
let isScrolling = true; // Status untuk menentukan apakah auto scroll berjalan
let scrollTimeout;

// Fungsi untuk auto scroll
function autoScroll() {
    if (isScrolling) {
        scrollAmount += scrollSpeedPopular;

        if (scrollAmount >= popular.scrollWidth / 2) {
            scrollAmount = 0;
        }

        popular.scrollLeft = scrollAmount;
    }

    requestAnimationFrame(autoScroll);
}

// Event listener untuk menghentikan scroll saat di-hover
popular.addEventListener('mouseenter', () => {
    clearTimeout(scrollTimeout); // Bersihkan timeout sebelumnya
    scrollTimeout = setTimeout(() => {
        isScrolling = false; // Beri jeda kecil sebelum menghentikan scroll
    }, 100);
});

// Event listener untuk melanjutkan scroll saat hover dihapus
popular.addEventListener('mouseleave', () => {
    clearTimeout(scrollTimeout); // Bersihkan timeout sebelumnya
    scrollTimeout = setTimeout(() => {
        isScrolling = true; // Beri jeda kecil sebelum melanjutkan scroll
    }, 100); // Timeout 100ms agar lebih smooth
});

// Memulai auto scroll
autoScroll();
