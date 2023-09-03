'use strict'

// 헤더 블러 처리
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset

    if (scrollTop === 0){
        header.classList.remove("blur");
    } else{
        header.classList.add("blur");
    }

});


//모달 close
function modalClose(){
    let $html = document.querySelector("html");
    const modalWRap = document.querySelector(".modal-wrap")

    modalWRap.remove();
    $html.classList.remove("lock");
}

//esc 누를시 댣기
function modalCloseKeyDown(){
    document.addEventListener("keydown", (e) => {
        if (e.keyCode == 27){
            modalClose();
        }
    });
}

//close 버튼 or 화면 클릭시 닫기
document.addEventListener("click", (e) => {
    const target = e.target;

    if (target.className === "btn-modal-close" || target.className === "modal-wrap") {
        modalClose();
    }

    modalCloseKeyDown();

});

