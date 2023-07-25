'use strict'

const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop === 0){
        header.classList.remove("blur");
    } else{
        header.classList.add("blur");
    }


});