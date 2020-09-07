HTMLCollection.prototype.forEach = Array.prototype.forEach;
(function() {
    const burgerItem = document.querySelector(".burger__menu");
    const navigItem = document.querySelector(".header__nav")
    burgerItem.addEventListener('click', () => {
        navigItem.classList.add('header__nav-active')
    })
    
}());
(function() {
    const navCloseItem = document.querySelector(".nav-close");
    const navig = document.querySelector(".header__nav")
    navCloseItem.addEventListener('click', () => {
        navig.classList.remove('header__nav-active')
    })
}());
(function() {
    const closeBtn = document.querySelectorAll(".modal__close");
    const modalWindow = document.querySelectorAll(".modal__window");
    closeBtn.forEach(function(element, i) {
        element.addEventListener('click', () => {
            modalWindow.forEach(function(element, i){
                element.classList.remove("modal__window-active")
            }
            )
           
        })
    })

}());
(function() {
    const modalBtn = document.querySelectorAll(".offers__btn");
    const modalWindow = document.querySelector(".modal__window") 
    modalBtn.forEach(function(element,i) {
        element.addEventListener("click", () => {
            modalWindow.classList.add('modal__window-active')
        })
    })

}());
(function() {
    const btnItem = document.getElementById("modal__btn")
    const modalWindowThanks = document.getElementById("modal__thanks")
    const modalWindow = document.querySelector('.modal__main-inner')
    btnItem.addEventListener('click', () => {
        modalWindow.classList.add("modal__main-inner-disable")
        modalWindowThanks.classList.add("modal__window-active")
    })
}())
(function() {
    const btnClose = document.getElementById("modal__btn-thanks");
    const modalWindow = document.querySelector(".modal__window");
    const modalWindowThanks = document.getElementById("modal__thanks");
    btnClose.addEventListener("click", () => {
        modalWindow.classList.remove("modal__window-active")
        modalWindowThanks.classList.remove("modal__window-active")
    })
}())