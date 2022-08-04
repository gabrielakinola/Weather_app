const geocode = require("./utils/geocode");

const weather = require("./utils/forecast");

geocode(process.argv[2], (err, { latitude, longitude, location } = {}) => {
  if (process.argv.length === 3) {
    if (err) {
      return console.log(err);
    }
    weather({ latitude, longitude }, (err, forecastdata) => {
      if (err) {
        return console.log(err);
      }
      console.log(location);
      console.log(forecastdata);
    });
  } else {
    console.log("Enter the location in the command line ");
  }
});
