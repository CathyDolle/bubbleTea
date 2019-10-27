// MAIN
let main = document.querySelector('.main')

// CUP SIZE
let cup = document.querySelector('.main__cup')
let largeSize = document.querySelector(".largeSize")
let mediumSize = document.querySelector(".mediumSize")
let smallSize = document.querySelector(".smallSize")

// BUTTON
let sizeButton = document.querySelectorAll('.board__size__button')
let flavorButton = document.querySelectorAll('.board__flavor__button')
let toppingButton = document.querySelectorAll(".board__topping__button")
let strawButton = document.querySelectorAll(".board__straw__button")
let labelButton = document.querySelectorAll('.board__label__button')
// CUP CONTAIN
let flavorLiquid = document.querySelector('.main__cup__body__liquid__flavor')
let label = document.querySelector('.main__cup__body__label')
// CIRCLE TOP COLOR
let circleLiquid = document.querySelector('.main__machine__top__circle__liquid')
let straw = document.querySelector('.main__cup__straw')
// TRASH
let trash = document.querySelector('.board__footer__trash')
// BOARD
let boardTitle = document.querySelector('.board__title')
let boardSize = document.querySelector('.board__size')
let boardFlavor = document.querySelector('.board__flavor')
let boardTopping = document.querySelector('.board__topping')
let boardStraw = document.querySelector('.board__straw')
let boardLabel = document.querySelector('.board__label')
let boardDone = document.querySelector('.board__done')
// DISTRIB
let distrib = document.querySelector('.main__machine__middle__distrib')
let bubble = document.querySelectorAll('.main__machine__middle__distrib__topping__bubble')
let distribBot = document.querySelector('.main__machine__middle__distrib__bot')
let distribLiquid = document.querySelector('.main__machine__middle__liquid')
let distribTopping = document.querySelector('.main__machine__middle__distrib__topping')
// DISTRIB BUBBLES 
let tapioca = document.querySelector('.topping__tapioca')
let tapiocaButton = document.querySelector('.tapioca')
let jelly = document.querySelector('.topping__jelly')
let jellyButton = document.querySelector('.jelly')
let multi = document.querySelector('.topping__multi')
let multiButton = document.querySelector('.multi')

// SOUND 

var servSound = new Audio('audio/serv2.mp3');
var toppingSound = new Audio('audio/topping.wav');
var bubbleSound = new Audio('audio/bubble.mp3');
var stickSound = new Audio('audio/stick.mp3');
var trashSound = new Audio('audio/trash.wav');
// let open = new Audio ('../audio/open.wav');

// CUP SIZE

largeSize.addEventListener('click' , () =>{
    cup.classList.remove('hidden')
    main.style.setProperty('--height_cup' , "270px")
})

mediumSize.addEventListener('click' , () =>{
    cup.classList.remove('hidden')
    main.style.setProperty('--height_cup' , "240px")
})

smallSize.addEventListener('click' , () =>{
    cup.classList.remove('hidden')
    main.style.setProperty('--height_cup' , "210px")
})


sizeButton.forEach(sizeButton => {
    sizeButton.addEventListener('click', () => {
        stickSound.play()
        setTimeout(() => {
            boardSize.classList.add("next-board")
        }, 100);
        boardTitle.querySelector('.size').classList.add("hidden")
        boardTitle.querySelector(".label").classList.remove("hidden")
        boardLabel.classList.remove("hidden")
        boardSize.classList.add("hidden")
    })
})

// LABEL

labelButton.forEach(labelButton => {
    labelButton.addEventListener('click', () => {
        stickSound.play()
        label.style.background = labelButton.getAttribute("data")
        activeButton = strawButton
        // boardStraw.classList.remove("hidden")
        setTimeout(() => {
            boardLabel.classList.add("next-board")
        }, 100);
        boardTitle.querySelector('.label').classList.add("hidden")
        boardTitle.querySelector(".straw").classList.add("hidden")
        boardTitle.querySelector(".flavor").classList.remove("hidden")
        boardFlavor.classList.remove("hidden")
        boardLabel.classList.add("hidden")
    })
})

// FLAVOR

flavorButton.forEach(flavorButton => {
    flavorButton.addEventListener('click', () => {
        servSound.play()
        flavorLiquid.classList.remove("flavor-animation")
        distribLiquid.classList.remove('distrib-animation')
        flavorButton.style.background = flavorButton.getAttribute("data")
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
    })
})

// TOPPING DISTRIB

toppingButton.forEach(toppingButton => {
    toppingButton.addEventListener('click', () => {
        setTimeout(() =>{
            toppingSound.play()
        },200)
        distribTopping.classList.remove("distrib-topping")
        circleLiquid.style.background = toppingButton.getAttribute("data")
        toppingButton.style.background = toppingButton.getAttribute("data")
        // if (activeButton != 0) {
        //     activeButton.style.background = "#4e4444"
        // }
        // activeButton = toppingButton
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
    trashSound.play()
})

// STRAW 

strawButton.forEach(strawButton => {
    strawButton.addEventListener('click', () => {
        stickSound.play()
        // strawSound.play()
        straw.classList.add("straw-animation")
        straw.style.background = strawButton.getAttribute("data")
        circleLiquid.style.background = "white"
        setTimeout(() => {
            distrib.style.width = "0px"
            distribBot.style.width = "0px"
            boardStraw.classList.add("next-board")
        }, 100);
        activeButton = strawButton
        // boardStraw.classList.remove("hidden")
        boardTitle.querySelector(".done").classList.remove("hidden")
        boardTitle.querySelector('.label').classList.add("hidden")
        boardTitle.querySelector(".straw").classList.add("hidden")
        boardFlavor.classList.add("hidden")
        boardLabel.classList.add("hidden")
        boardDone.classList.remove("hidden")
    })
})

