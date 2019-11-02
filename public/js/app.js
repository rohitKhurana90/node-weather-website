console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    if (location && location.length > 0) {
        const url = 'http://localhost:3000/weather?address='+ location
        fetch(url).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    message1.textContent = data.error
                } else {
                    message1.textContent = data.Forecast
                    message2.textContent = data.Location

                }
            })
        })
    }
})