const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailSpan = document.querySelector('#gmail_result')

const regExp = /gmail.com$/

gmailButton.addEventListener('click' , () => {
    if (regExp.test(gmailInput.value)){
        gmailSpan.innerHTML = "OK"
        gmailSpan.style.color = "green"
    }else{
        gmailSpan.innerHTML = "NOT"
        gmailSpan.style.color = "red"
    }
})



const childBlock = document.querySelector('.child_block')



let positionX = 0
let positionY = 0
const moveChildBlock = () => {
    if (positionX < 449 && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
    } else if (positionX === 449 && positionY < 448) {
        positionY++
        childBlock.style.top = `${positionY}px`
    } else if (positionX > 0 && positionY === 448) {
        positionX--
        childBlock.style.left = `${positionX}px`
    } else if (positionX === 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
    }

    setTimeout(moveChildBlock, 10)
}

moveChildBlock()


const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')
const  second = document.querySelector('#ml-secondsS')
let num = 0
let stopExecution = false
let intervalID
startButton.addEventListener('click' , () => {
    stopExecution = false
    clearInterval(intervalID)

    intervalID = setInterval(() => {
        num++
        second.innerHTML = num
    }, 1000)
})

stopButton.addEventListener('click', () => {
    stopExecution = true
    clearInterval(intervalID)
})


resetButton.addEventListener('click', () => {
    num = 0
    second.innerHTML = num
    stopExecution = true
})