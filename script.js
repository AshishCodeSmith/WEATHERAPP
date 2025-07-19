const apiKey = '672668e0e2a5b0317254538775cd65e5';

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherCard = document.getElementById("weatherInfo");

  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();

    if (data.cod !== 200) {
      alert("City not found!");
      return;
    }

    document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").textContent = `🌡️ ${data.main.temp}°C`;
    document.getElementById("description").textContent = `☁️ ${data.weather[0].description}`;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherCard.classList.remove("hidden");

  } catch (error) {
    alert("Error fetching weather data!");
    console.error(error);
  }
}
