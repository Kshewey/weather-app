const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=98af082089091c1cac0a035e82f5a2d3&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(body.current.weather_descriptions[0]+ ". " + 'It is currently ' + body.current.temperature + ' degrees. ' + 'It feels like ' + body.current.feelslike+ ' degrees.')
        }
    })

} 




module.exports = forecast