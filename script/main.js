// BUTTON
let flavorButton = document.querySelectorAll('.board__flavor__button')
let toppingButton = document.querySelectorAll(".board__topping__button")
let strawButton = document.querySelectorAll(".board__straw__button")
let labelButton = document.querySelectorAll('.board__label__button')
// CUP CONTAIN
let flavorLiquid = document.querySelector('.main__cup__body__liquid__flavor')
let label = document.querySelector('.main__cup__body__label')
// CIRCLE TOP COLOR
let circleLiquid = document.querySelector('.main__machine__top__circle__liquid')
let activeButton = 0
let straw = document.querySelector('.main__cup__straw')
// TRASH
let trash = document.querySelector('.board__footer__trash')
// BOARD
let boardTitle = document.querySelector('.board__title')
let boardFlavor = document.querySelector('.board__flavor')
let boardTopping = document.querySelector('.board__topping')
let boardStraw = document.querySelector('.board__straw')
let boardLabel = document.querySelector('.board__label')
// DISTRIB
let distrib = document.querySelector('.main__machine__middle__distrib')
let bubble = document.querySelectorAll('.main__machine__middle__distrib__topping__bubble')
let distribBot = document.querySelector('.main__machine__middle__distrib__bot')
let distribLiquid = document.querySelector('.main__machine__middle__distrib__liquid')
let distribTopping = document.querySelector('.main__machine__middle__distrib__topping')
// DISTRIB BUBBLES 
let tapioca = document.querySelector('.topping__tapioca')
let tapiocaButton = document.querySelector('.tapioca')
let jelly = document.querySelector('.topping__jelly')
let jellyButton = document.querySelector('.jelly')
let multi = document.querySelector('.topping__multi')
let multiButton = document.querySelector('.multi')

// SOUND 

var servSound = new Audio('audio/serv.mp3');
var toppingSound = new Audio('audio/topping.wav');
var bubbleSound = new Audio('audio/bubble.mp3');
// let open = new Audio ('../audio/open.wav');

flavorButton.forEach(flavorButton => {
    flavorButton.addEventListener('click', () => {
        servSound.play()
        flavorLiquid.classList.remove("flavor-animation")
        distribLiquid.classList.remove('distrib-animation')
        flavorButton.style.background = flavorButton.getAttribute("data")
        if (activeButton != 0) {
            activeButton.style.background = "#4e4444"
        }
        activeButton = flavorButton

        circleLiquid.style.background = flavorButton.getAttribute("data")
        flavorLiquid.style.background = flavorButton.getAttribute("data")
        distribLiquid.style.background = flavorButton.getAttribute("data")
        setTimeout(() => {
            flavorLiquid.classList.add("flavor-animation")
            distribLiquid.classList.add('distrib-animation')
            boardFlavor.classList.add("next-board")
            // distrib.Child(distrib.children).style.background = "pink"
        }, 100);
        // next 
        boardTitle.querySelector(".topping").classList.remove("hidden")
        boardTitle.querySelector(".flavor").classList.add("hidden")
        boardTitle.querySelector('.straw').classList.add("hidden")
        // boardFlavor.classList.add("hidden")
        boardTopping.classList.remove("hidden")
        boardStraw.classList.add("hidden")
        // menuButton.querySelector(".topping").style.color = "#282323"
        // menuButton.querySelector(".flavor").style.color = "white"
        // menuButton.querySelector(".straw").style.color = "white"
    })
})

// TOPPING DISTRIB

toppingButton.forEach(toppingButton => {
    toppingButton.addEventListener('click', () => {
        toppingSound.play()
        distribTopping.classList.remove("distrib-topping")
        circleLiquid.style.background = toppingButton.getAttribute("data")
        toppingButton.style.background = toppingButton.getAttribute("data")
        if (activeButton != 0) {
            activeButton.style.background = "#4e4444"
        }
        activeButton = toppingButton
        setTimeout(() => {
            distrib.classList.add("change-distrib")
            // distrib.style.width = "230px"
            distribBot.style.width = "0px"
            distribTopping.classList.add("distrib-topping")
            boardTopping.classList.add("next-board")
        }, 100);
        // next
        boardTitle.querySelector('.straw').classList.remove("hidden")
        boardTitle.querySelector(".flavor").classList.add("hidden")
        boardTitle.querySelector(".topping").classList.add("hidden")
        boardStraw.classList.remove("hidden")
        boardFlavor.classList.add("hidden")
        // boardTopping.classList.add("hidden")
        // menuButton.querySelector(".topping").style.color = "white"
        // menuButton.querySelector(".flavor").style.color = "white"
        // menuButton.querySelector(".straw").style.color = "#282323"
        // distrib.classList.add("hidden")
    })
})

// TOPPING DISTRIB BUBBLE

tapiocaButton.addEventListener('click', function () {
    tapioca.classList.remove("hidden")
    jelly.classList.add("hidden")
    multi.classList.add("hidden")
})

jellyButton.addEventListener('click', function () {
    jelly.classList.remove("hidden")
    tapioca.classList.add("hidden")
    multi.classList.add("hidden")
})

multiButton.addEventListener('click', function () {
    multi.classList.remove("hidden")
    tapioca.classList.add("hidden")
    jelly.classList.add("hidden")
})

//trash

trash.addEventListener('click', function () {
    window.location.reload();
})

// STRAW 

strawButton.forEach(strawButton => {
    strawButton.addEventListener('click', () => {
        straw.classList.add("straw-animation")
        straw.style.background = strawButton.getAttribute("data")
        circleLiquid.style.background = "white"
        setTimeout(() => {
            distrib.style.width = "0px"
            distribBot.style.width = "0px"
            boardStraw.classList.add("next-board")
        }, 100);
        // strawButton.style.border = "solid 0.5px white"
        // if (activeButton != 0) {
        //     activeButton.style.border = "0"
        // }
        activeButton = strawButton
        // boardStraw.classList.remove("hidden")
        boardTitle.querySelector('.label').classList.remove("hidden")
        boardTitle.querySelector(".straw").classList.add("hidden")
        boardFlavor.classList.add("hidden")
        boardLabel.classList.remove("hidden")
    })
})

// LABEL

labelButton.forEach(labelButton => {
    labelButton.addEventListener('click', () => {
        label.style.background = labelButton.getAttribute("data")
        // circleLiquid.style.background = labelButton.getAttribute("data")
        activeButton = strawButton
        // boardStraw.classList.remove("hidden")
        boardTitle.querySelector('.label').classList.remove("hidden")
        boardTitle.querySelector(".straw").classList.add("hidden")
        boardFlavor.classList.add("hidden")
        boardLabel.classList.remove("hidden")
    })
})