const axios = require('axios')


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng}&appid=0cf1e3dd9f4e33cd3e645ad9fd0e0156&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}