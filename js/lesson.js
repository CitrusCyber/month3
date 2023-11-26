//PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)){
        phoneSpan.innerHTML = 'OK'
        phoneSpan.style.color = 'green'
    } else{
        phoneSpan.innerHTML = 'NOT OK'
        phoneSpan.style.color = 'red'
    }
})


//TAB SLIDER

const tabsContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')


let currentTabIndex = 0
let intervalId

const hideTabsContent = () => {
    tabsContent.forEach(tabContent => {
        tabContent.style.display = 'none'
    });
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    });
};

const showTabsContent = (index = 0) => {
    tabsContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
};

const switchTab = () => {
    hideTabsContent()
    showTabsContent(currentTabIndex)
    currentTabIndex = (currentTabIndex + 1) % tabs.length
}

intervalId = setInterval(switchTab, 3000)

tabsParent.onclick = (event) => {
    if(event.target.classList.contains('tab_content_item')){
        clearInterval(intervalId)

        tabs.forEach((tabElement , tabIndex) => {
            if(event.target === tabElement){
                currentTabIndex = tabIndex
                switchTab()
            }
        })

        intervalId = setInterval(switchTab,3000)
    }
}



// CONVERTER

const somInput = document.querySelector('#som')
const USDInput = document.querySelector('#usd')
const euroInput = document.querySelector('#eur')


const converter = (element , targetElement, type) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET','../data/converter.json')
        request.setRequestHeader('Content-type','application/json')
        request.send()

        request.onload = () => {
            const  changes = JSON.parse(request.response)
            switch(type) {
                case 'som':
                    targetElement.value = (element.value / changes.usd).toFixed(2)
                    euroInput.value = (element.value / changes.euro).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * changes.usd).toFixed(2)
                    euroInput.value = (element.value * changes.usd / changes.euro).toFixed(2)
                    break
                case 'euro':
                    targetElement.value = (element.value * changes.euro).toFixed(2)
                    USDInput.value = (element.value * changes.euro / changes.usd).toFixed(2)
                    break
                default:
                    targetElement.value = ''
                    USDInput.value = ''
                    euroInput.value = ''
                    break
            }
            element.value === '' && (targetElement.value = '' , USDInput.value = '' , euroInput.value = '')
        }
    }
}

converter(somInput , USDInput , "som")
converter(USDInput, somInput, 'usd')
converter(euroInput, somInput, 'euro')

///CARD SWITCHER

const card = document.querySelector('.card'),
    btnPrev = document.querySelector('#btn-prev')
    btnNext = document.querySelector('#btn-next')

let count = 198

btnNext.onclick = () =>{
    count++
    fetchData(count)
}

btnPrev.onclick = () =>{
    count--
    fetchData(count)
}

function fetchData(count) {
    count = (count + 199) % 200 + 1

    fetch('https://jsonplaceholder.typicode.com/todos/' + count)
        .then(response => response.json())
        .then(data => {
            displayDataOnCard(data)
        })
}

function displayDataOnCard(data) {
    card.innerHTML = `
        <p>${data.title}</p>
        <span style="color: ${data.completed ? "green" : "red"}">${data.completed}</span>
        <span>${data.id}</span>`

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(postsData => {
            console.log(postsData)
        })
}
fetchData(count)



