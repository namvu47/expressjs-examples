const request = require('request');

module.exports.index = function (req, res, next) {
	try {
		res.render('index');
	} catch (err) {
		next(err)
	};
};

module.exports.post = function (req, res, next) {
	let city = req.body.city;
	let url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=b5777634eccfb1657172edb8882929bc";
	request (url, function (err, response, body) {
		if (err) {
			res.render('index', 
				{ weather: null, err: "Error, Please try again"})
		} else {
			let weather = JSON.parse(body);

			if (weather.main === undefined || null ) {
				res.render('index', {weather: null, err: "Error, Please try again"})
			} else {
				res.render('index', {
					weather: weather
				});
			}
		}
	})
}