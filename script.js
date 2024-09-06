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

// Ganti warna setiap 2 detik
setInterval(changeBackgroundColor, 5000);