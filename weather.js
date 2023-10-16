const btn = document.querySelector('.button');

// Adding an event listener to the button
btn.addEventListener('click', function() {
    getWeather();
});

function getWeather() {
    const apiKey = 'c0f72452ba83604423e6dd258597fdfb'; // Replace with your API key
    const input = document.getElementById('cityInput'); // Changed from 'input' to 'cityInput' to match the HTML ID
    const cityName = input.value;
    const temp = document.querySelector('.temp'); // Changed to querySelector for single elements
    const city = document.querySelector('.city'); // Changed to querySelector for single elements
    const humidity = document.querySelector('.humidity'); // Changed to querySelector for single elements
    const wind = document.querySelector('.wind'); // Changed to querySelector for single elements
    const weatherResult = document.getElementById('weatherResult'); // Moved outside of the fetch scope

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
        
        .then(response => response.json())
        
    
        
        .then(data => {
            
        
            // Using innerText to set text content of elements
            city.innerText = data.name;
            temp.innerText =Math.round(data.main.temp) + "°C";
            humidity.innerText = data.main.humidity + "%";
            wind.innerText = data.wind.speed + "km/h";
            const weatherIcon = document.querySelector('.here');

            // Replace this comment with code to get the icon URL based on the icon code from data.weather[0].icon
            const iconCode = data.weather[0].icon; // Icon code from OpenWeatherMap
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

            weatherIcon.src = iconUrl; // Set the icon URL based on weather condition



            if (weatherResult.classList.contains('show')) {
                weatherResult.classList.add('result');
            } else {
                weatherResult.classList.remove('result');
            }



        
        })
        .catch(error => {
            // Moved the error handling to the catch block
            weatherResult.innerHTML = 'City not found. Please try again.';
        });
    
    }

