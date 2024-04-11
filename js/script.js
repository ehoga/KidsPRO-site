function menuShow() {
    let menu = document.querySelector(".menu");
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        document.querySelector(".menu-ico-imag").src = "assets/img/menu.svg"
    } else {
        menu.classList.add("open");
        document.querySelector(".menu-ico-imag").src = "assets/img/close.svg"
    }
}