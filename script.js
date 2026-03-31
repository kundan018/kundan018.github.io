async function getWeather() {
    const city = document.getElementById("cityInput").value;

    // 🔑 Replace with your API key
    const apiKey = "YOUR_API_KEY";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weatherResult").innerHTML = "❌ City not found!";
            return;
        }

        document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}</h2>
            🌡️ Temperature: ${data.main.temp} °C <br>
            🌥️ Weather: ${data.weather[0].description} <br>
            💧 Humidity: ${data.main.humidity}% <br>
            🌬️ Wind Speed: ${data.wind.speed} m/s
        `;
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "⚠️ Error fetching data!";
    }
}
