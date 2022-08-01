const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=1abca9ad80d041237953d9abaad6c215&query=7.469891,%203.911530&units=f";

request({ url: url, json: true }, (error, response) => {
  const data = response.body.current;
  //console.log(data.current);
  console.log(
    `The temperature is currently ${data.temperature}${response.body.request.unit}. It feels like ${data.feelslike}${response.body.request.unit} out there`
  );
});
