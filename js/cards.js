async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        return data.slice(0 , 1)
    } catch (error) {
        console.error('Ошибка при получении данных:', error)
        return []
    }
}

async function renderCards() {
    const cardsContainer = document.getElementById('cardsContainer')
    const data = await fetchData()

    data.forEach(cardData => {
        const card = document.createElement('div')
        card.className = 'card'

        const image = document.createElement('img')
        image.src = 'https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/all-models/m-series/m5-sedan/2020/equipment/bmw-5-series-sedan-m-models-equipment-sd-individual-01.jpg'
        image.alt = 'Изображение BMW M5 F90'

        const title = document.createElement('h2')
        title.textContent = 'BMW M5 F90'

        const description = document.createElement('p')
        description.textContent = 'BMW M5 (4.4 AT, 600 л.с.) 6 поколение (F90) (2017 – 2020)'

        card.appendChild(image)
        card.appendChild(title)
        card.appendChild(description)

        cardsContainer.appendChild(card)
    });
}

renderCards()

