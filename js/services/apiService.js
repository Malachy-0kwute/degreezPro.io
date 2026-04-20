

export default function getLocationCoordinates(location) {
  const geoService = `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`;
  
  return fetch(geoService)
  .catch((error) => {
    console.error('Error fetching geocoding data:', error);
    throw error;
  })
  .then((response) => response.json())
  .then((response) => {

    getWeatherData(response.results[0].latitude, response.results[0].longitude);
  });

}

function getWeatherData(latitude, longitude) {
  const weatherData = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&`+
  `hourly=temperature_2m&temperature_unit=fahrenheit&timezone=auto&current_weather=true&windspeed_unit=mph`+
  `&precipitation_unit=inch&forecast_days=1`;
  return weatherData;
}
