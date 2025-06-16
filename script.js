let hover = document.querySelector(".hover");
let hover_2 = document.querySelector(".hover_2");
let level_1 = document.querySelector(".level_1");
let level_2 = document.querySelector(".level_2");

if (hover && level_1) {
    hover.addEventListener("click", function() {
        if (level_1.style.display === "block") {
            level_1.style.display = "none";
        } else {
            level_1.style.display = "block";
        }
        level_1.classList.toggle("active");
    });
}

if (hover_2 && level_2) {
    hover_2.addEventListener("click", function() {
        if (level_2.style.display === "block") {
            level_2.style.display = "none";
        } else {
            level_2.style.display = "block";
        }
        level_2.classList.toggle("active");
    });
}

// Loader
window.addEventListener("load", function() {
    setTimeout(function() {
        const loader = document.getElementById("loader-wrapper");
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 2000);
        }
    }, 1500);
});

// Burger menu
document.addEventListener("DOMContentLoaded", function() {
    const burgerBtn = document.querySelector(".burger");
    let menuOpen = false;

    burgerBtn.addEventListener("click", function() {
        let existingMenu = document.querySelector(".dynamic-header-wrapper");

        if (!menuOpen) {
            const header = document.querySelector("header");
            const wrapper = document.createElement("div");
            wrapper.classList.add("dynamic-header-wrapper");
            wrapper.innerHTML = `
                <div class="header__right active">
                    <ul class="link-list list-unstyled m-0">
                        <li><a class="hover" href="#">MAHSULOTLAR</a><img src="img/Symbol.svg" /></li>
                        <li><a class="hover_2" href="#">BIZ HAQIMIZDA</a><img src="./img/Symbol.svg" /></li>
                        <li><a href="#">QO‘LLAB-QUVVATLASH</a><img src="./img/Symbol.svg" /></li>
                        <li><a href="#">ALOQA</a></li>
                    </ul>
                </div>
            `;
            header.appendChild(wrapper);

            // 🔥 ul li display block qilish
            const liItems = wrapper.querySelectorAll("ul.link-list li");
            liItems.forEach((li) => {
                li.style.display = "block";
            });

            menuOpen = true;
        } else {
            if (existingMenu) existingMenu.remove();
            menuOpen = false;
        }
    });
});