const request = require("request");

const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/ibadan%20north.json?access_token=pk.eyJ1IjoiZ2FicmllbGFraW5vbGEiLCJhIjoiY2w0c2dhMWw0MGZ6YjNkbnVtYmR0aW0zMyJ9.ZPwGcG48Xpv9LtblciUYqQ&limit=1";

request({ url: geocodeUrl, json: true }, (err, res) => {
  if (err) {
    console.log("Unable to connect to geocode api service");
  } else if (res.body.features.length === 0) {
    console.log("Unable to find location. Please try another search");
    //console.log(res.body.features);
  } else {
    const [longitude, latitude] = res.body.features[0].center;
    console.log(latitude, longitude);
    //console.log(res.body.features);
  }
});

const weatherUrl =
  "http://api.weatherstack.com/current?access_key=1abca9ad80d041237953d9abaad6c215&query=7.469891,%203.911530&units=m";

request({ url: weatherUrl, json: true }, (error, response) => {
  if (error) {
    console.log(`Unable to connect to weatherstack api`);
  } else if (response.body.error) {
    console.log(
      "Please input the location coordinates using the querry string"
    );
  } else {
    const data = response.body.current;
    console.log(
      `${data.weather_descriptions[0]}. The temperature is currently ${data.temperature} degree celcius. It feels like ${data.feelslike} degree celcius out there`
    );
  }
});
