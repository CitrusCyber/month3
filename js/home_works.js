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




function moveBlock(block,targetX,currentX){
    if(currentX < targetX){
        currentX += 1
        block.style.left = `${currentX}px`

        if (currentX < targetX){
            setTimeout(() => moveBlock(block , targetX,currentX), 16  )
        }
    }
}

const childBlock = document.querySelector('.child_block')
const targetX = document.querySelector('.parent_block').clientWidth - childBlock.offsetWidth

moveBlock(childBlock, targetX, 0)