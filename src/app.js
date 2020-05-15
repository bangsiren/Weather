const path = require("path");
const express = require('express');
const ehbs = require('express-handlebars');
const router = require('./router')
const app = express();



app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'hbs');

app.use('/', router)
// app.get('/about', (req,res)=>{
//     res.sendFile('/about', )
// })
app.listen(9000, (req,res)=>{
    console.log('Server Listening on port: 9000')
})