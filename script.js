let hover = document.querySelector(".hover");
let hover_2 = document.querySelector(".hover_2")
let level_1 = document.querySelector(".level_1");
let level_2 = document.querySelector(".level_2");

hover.addEventListener("click", function() {
    if (level_1.style.display === "block") {
        level_1.style.display = "none";
    } else {
        level_1.style.display = "block";
    }
});


hover.addEventListener("click", function() {
    level_1.classList.toggle("active");
});

hover_2.addEventListener("click", function() {
    if (level_2.style.display === "block") {
        level_2.style.display = "none";
    } else {
        level_2.style.display = "block";
    }
});

hover_2.addEventListener("click", function() {
    level_2.classList.toggle("active");
});

// 

window.addEventListener("load", function() {
    setTimeout(function() {
        const loader = document.getElementById("loader-wrapper");
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 2000);
    }, 1500);
});