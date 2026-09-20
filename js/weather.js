const API_KEY = "3fa2428d96e7f796688f1aecff75dac8";

const weatherLocation = document.querySelector("#weather-location");
const weatherTemperature = document.querySelector("#weather-temperature");
const weatherIcon = document.querySelector("#weather-icon");
const weatherStatus = document.querySelector("#weather-status");


// 날씨 정보를 가져왔을 때
function onGeoOk(position) {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?lat=${lat}` +
        `&lon=${lon}` +
        `&appid=${API_KEY}` +
        `&units=metric` +
        `&lang=kr`;


    fetch(url)
        .then(response => {

            if (!response.ok) {
                throw new Error("Weather API request failed.");
            }

            return response.json();
        })
        .then(data => {

            // 지역
            weatherLocation.innerText = data.name;

            // 온도
            weatherTemperature.innerText =
                `${Math.round(data.main.temp)}°C`;

            // 날씨 상태
            weatherStatus.innerText =
                data.weather[0].description;

            // 날씨 아이콘
            const weatherId = data.weather[0].id;

            weatherIcon.innerText =
                getWeatherIcon(weatherId);
        })
        .catch(error => {

            console.error("Weather error:", error);

            weatherLocation.innerText = "Weather";
            weatherTemperature.innerText = "--";
            weatherStatus.innerText = "날씨 정보를 가져올 수 없습니다.";
            weatherIcon.innerText = "☁️";
        });
}


// 위치 정보를 가져오지 못했을 때
function onGeoError(error) {

    console.error("Geolocation error:", error);

    weatherLocation.innerText = "Unknown";
    weatherTemperature.innerText = "--";
    weatherStatus.innerText = "위치를 확인할 수 없습니다.";
    weatherIcon.innerText = "📍";
}


// OpenWeatherMap의 weather ID를 아이콘으로 변환
function getWeatherIcon(weatherId) {

    if (weatherId >= 200 && weatherId < 300) {
        return "⛈️"; // Thunderstorm
    }

    if (weatherId >= 300 && weatherId < 400) {
        return "🌦️"; // Drizzle
    }

    if (weatherId >= 500 && weatherId < 600) {
        return "🌧️"; // Rain
    }

    if (weatherId >= 600 && weatherId < 700) {
        return "❄️"; // Snow
    }

    if (weatherId >= 700 && weatherId < 800) {
        return "🌫️"; // Mist / Fog
    }

    if (weatherId === 800) {
        return "☀️"; // Clear
    }

    if (weatherId > 800) {
        return "☁️"; // Clouds
    }

    return "🌡️";
}


// 브라우저에서 현재 위치 요청
navigator.geolocation.getCurrentPosition(
    onGeoOk,
    onGeoError
);