function reveal(){
let windowHeight = window.innerHeight;
    let elementVisible = 500;



    let centerLine = document.getElementById("center-line");
    let row1 = document.getElementById("row-1");
    let row2 = document.getElementById("row-2");
    let row3 = document.getElementById("row-3");
    let row4 = document.getElementById("row-4");
    let scrollIcon = document.getElementById("scroll-icon");
    let icon = document.getElementById("fa-caret-up");

    let centerLineFormation = document.getElementById("center-line-formation");
    let row1Formation = document.getElementById("row-1-formation");
    let row2Formation = document.getElementById("row-2-formation");
    let row3Formation = document.getElementById("row-3-formation");
    let row4Formation = document.getElementById("row-4-formation");
    let scrollIconFormation = document.getElementById("scroll-icon-formation");
    let iconFormation = document.getElementById("fa-caret-up-formation");


    let elementTop = centerLine.getBoundingClientRect().top;
    let elementTopFormation = centerLineFormation.getBoundingClientRect().top;


    if (elementTop < windowHeight - elementVisible) {
        centerLine.classList.add("active");
        scrollIcon.classList.add("active");
        setTimeout(function() {
            row1.classList.add("active");
        }, 300);
        setTimeout(function() {
            row2.classList.add("active");
        }, 600);
        setTimeout(function() {
            row3.classList.add("active");
        }, 900);
        setTimeout(function() {
            row4.classList.add("active");
        }, 1200);
        setTimeout(function() {
            icon.classList.add("active");
        }, 1400);

    } else {

    }

    if (elementTopFormation < windowHeight - elementVisible) {
        centerLineFormation.classList.add("active");
        scrollIconFormation.classList.add("active");
        setTimeout(function() {
            row1Formation.classList.add("active");
        }, 300);
        setTimeout(function() {
            row2Formation.classList.add("active");
        }, 600);
        setTimeout(function() {
            row3Formation.classList.add("active");
        }, 900);
        setTimeout(function() {
            row4Formation.classList.add("active");
        }, 1200);
        setTimeout(function() {
            iconFormation.classList.add("active");
        }, 1400);

    } else {

    }




}

window.addEventListener("scroll", reveal);