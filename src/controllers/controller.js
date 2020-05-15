const axios = require('axios');
const Weather = require('../model/weather')
const API_KEY = "24a05357ea9b1d9efa544456a0c0b4a3";
exports.renderHomePage = (req,res)=>{
    res.render('index');
}

exports.getWheather = (req,res)=>{
    const city = req.body.city;

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    
    const weather = new Weather(req.body.city);

    weather.validateUserInput();

    if(weather.errors.length) {
        res.render('index', {
            error: weather.errors.toString()
        })
    }else{
         axios.get(url).then((response)=>{
        res.render('index', {
            weather: `It is currently ${response.data.main.temp} in ${response.data.name}`
        
        });
        
    }).catch((error)=>{
        console.log(error)
    })
    }
   
}
exports.renderAboutPage = (req,res)=>{
    res.render('about');
};