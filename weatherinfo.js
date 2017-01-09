var request = require('request');

//var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2addd7ff105e85df050d183facd09245';

module.exports = function (location) {
	return new Promise(function (resolve, reject) {
var encodedLocation = encodeURIComponent(location);
var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=matric&appid=2addd7ff105e85df050d183facd09245';



		if (!location) {
			return reject('No location provided');
		}

		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject('Unable to fetch weather.');
			} else {
				resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
			}
		});
	});
}
