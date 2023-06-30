const express = require('express');
const app = express();
let cors = require('cors');
const bodyparser = require('body-parser')

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(require('./routes/correosRoutes'))

app.listen('3002', ()=>{
    console.log('escuchando');
})