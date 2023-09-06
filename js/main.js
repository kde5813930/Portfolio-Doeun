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

// 헤더 모바일 햄버거버튼 클릭시 이벤트
const hamburgerBtn = document.querySelector(".btn-hamburger");

function toggleClass(element, className) {
    if(element.classList.contains(className)){
        element.classList.remove(className);
    }else{
        element.classList.add(className);
    };
}
hamburgerBtn.addEventListener('click', function(){
    toggleClass($html, 'lock');
    toggleClass(header, 'active');
    toggleClass(hamburgerBtn, 'active');
});

// 헤더 모바일 gnb list 클릭시 이벤트
const gnbList = document.querySelectorAll(".gnb-list li");

    gnbList.forEach((nav) => {
        nav.addEventListener("click", () => {
            if ( header.classList.contains("active")){
                header.classList.remove("active");
            }
        });
    })




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


//go-top
function goTop() {

    const goTopWrap = document.querySelector(".go-top-wrap");
    const goTop = document.querySelector(".go-top");

    const domHei = document.offsetHeight;
    const winHei = document.offsetHeight;
    const footerHei = document.querySelector(".footer").clientHeight;
    const footerTop = domHei - winHei - footerHei;

    /* scroll 시  go-top show, hide */
    window.addEventListener("scroll", () => {
        const scrollTop = $(window).scrollTop();

        if (scrollTop > 0) {
            goTopWrap.classList.add("active");
        } else {
            goTopWrap.classList.remove("active");
        }

        if (scrollTop >= footerTop) {
            goTopWrap.classList.add("bottom");
        } else {
            goTopWrap.classList.remove("bottom");
        }
    })

    //goTop 클릭시 화면 상단으로 이동
    goTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

goTop();

