var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d3689402bd2975a4265265b3ae954f16&units=metric';

module.exports = {
    getTemp: function (location) {
        // Makes sure location is encoded properly for browser.
        var encodedLocation = encodeURIComponent(location);
        // Backtick lets you inject variables right inside the string using ${}.
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}
