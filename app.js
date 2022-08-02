const request = require("request");

const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/ibadan%20north.json?access_token=pk.eyJ1IjoiZ2FicmllbGFraW5vbGEiLCJhIjoiY2w0c2dhMWw0MGZ6YjNkbnVtYmR0aW0zMyJ9.ZPwGcG48Xpv9LtblciUYqQ&limit=1";

request({ url: geocodeUrl, json: true }, (err, res) => {
  if (err) {
    console.log("Unable to connect to geocoding service");
  } else {
    const [longitude, latitude] = res.body.features[0].center;
    console.log(latitude, longitude);
  }
});

const weatherUrl =
  "http://api.weatherstack.com/current?access_key=1abca9ad80d041237953d9abaad6c215&query=7.469891,%203.911530&units=f";

request({ url: weatherUrl, json: true }, (error, response) => {
  const data = response.body.current;
  console.log(data.current);
  console.log(
    `${data.weather_descriptions[0]}. The temperature is currently ${data.temperature}${response.body.request.unit}. It feels like ${data.feelslike}${response.body.request.unit} out there`
  );
});
