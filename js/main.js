'use strict'

// 헤더 블러 처리
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop === 0){
        header.classList.remove("blur");
    } else{
        header.classList.add("blur");
    }

});

// 모달 close
document.addEventListener("click", (e) => {
    if (e.target.className === "btn-modal-close") {

        let $html = document.querySelector("html");
        const modalBtn = document.querySelector(".btn-modal-close");

        modalBtn.parentNode.parentNode.remove();
        $html.classList.remove("lock");

    }
});

