async function getWeather() {
    const cityName = document.getElementById("cityInput").value;
    if (!cityName) {
        alert("Masukkan nama kota terlebih dahulu!");
        return;
    }

    const apiKey = window.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Kota tidak ditemukan");
        }
        const data = await response.json();
        document.getElementById("weatherResult").innerHTML = `
            <p>🌍 <strong>${data.name}</strong></p>
            <p>🌡️ Suhu: <strong>${data.main.temp}°C</strong></p>
            <p>☁️ Kondisi: <strong>${data.weather[0].description}</strong></p>
            <p>💧 Kelembapan: <strong>${data.main.humidity}%</strong></p>
        `;
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p class="text-red-500">❌ ${error.message}</p>`;
    }
}
