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
const $container = document.querySelector("html");
const modalBtn = document.querySelector(".btn-modal-close");

modalBtn.addEventListener("click", (e) => {
     const $target = e.target;
     const $targetParent = $target.parentNode.parentNode;

    $container.classList.remove("lock");
    $targetParent.classList.remove("active");
})


