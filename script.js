

async function getWeather() {
    const city = document.getElementById('city').value


    const apiKey = "your api key here"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    

    try {
        const response = await fetch(apiUrl)
        if(!response.ok) {
            throw new Error("City not found!")
        }
        const data = await response.json()
        displayWeatherData(data)
    } catch(error) {
        alert(error.message)
    }

}

function displayWeatherData(data) {
    document.getElementById('cityName').innerText = data.name
    document.getElementById('weatherIcon').src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById('temperature').innerText = `${Math.round(data.main.temp)}°C`
    document.getElementById('description').innerText = data.weather[0].description
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}`
}

function handleEnterButton(event) {
    if (event.key === 'Enter')
        getWeather()
}

