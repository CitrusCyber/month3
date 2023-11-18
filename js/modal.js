
//modal

const modal = document.querySelector('.modal')
const modalCloseButton = document.querySelector('.modal_close')
const triggerModal = document.querySelector('#btn-get')

let modalDisplayed = false
const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    modalDisplayed = true
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

triggerModal.onclick = () => openModal()
modalCloseButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if(event.target === modal){
        closeModal()
    }
}

const openModelAfterDelay = () => {
    setTimeout(() => {
        openModal()
        window.addEventListener('scroll' , checkIfScrollEnd)
    }, 10000)
}

window.onload = openModelAfterDelay

const checkIfScrollEnd = () => {
    const scrollPosition = window.scrollY
    const siteHeight = document.documentElement.scrollHeight - window.innerHeight

    if(!modalDisplayed && scrollPosition + window.innerHeight >= siteHeight){
        openModal()
        window.removeEventListener("scroll", checkIfScrollEnd)
    }
}

triggerModal.onclick = () => openModal()
modalCloseButton.onclick = () => closeModal()

window.addEventListener('scroll' , checkIfScrollEnd)