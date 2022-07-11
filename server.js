const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors())

app.get('/', (req, res) => {
    console.log('your response is working')
    res.sendFile(__dirname + '/index.html')
})


app.get('/api/:days', (req, res) => {
    const dayVariable = req.params.days.toLowerCase()
    if(crystals[dayVariable]){
        res.json(crystals[dayVariable])
    }else{
        res.json('please enter a day of the week!')
    }
})


   const crystals = {
        "monday": {
            "day": "Monday",
            "stone": "Selenite", 
            "planet": "Moon",
            "image": "https://cdn-s3.touchofmodern.com/products/001/667/660/75131f0bd4dc8152fec29cd517f69fd7_large.jpg?1572467129"
        },
        
        "tuesday" : {
            "day": "Tuesday",
            "stone": "Jasper",
            "planet": "Mars",
            "image": "https://gemsbymail.com/images/products/29775.JPG"
            },
    
        "wednesday": {
            "day": "Wednesday",
            "stone":"Lapis Lazuli",
            "planet":"Mercury",
            "image": 'https://www.crystalis.com/wp-content/uploads/2020/06/lapi-tumb.jpg'
        },

        "thursday": {
            "day": "Thursday",
            "stone":"Aventurine",
            "planet": "Jupiter",
            "image": "https://gemstagram.com/wp-content/uploads/2019/11/green-aventurine-scaled.jpg"
                },

        "friday": {
            "day": "Friday",
            "stone":"Rhodonite",
            "planet": "Venus",
            "image": "https://www.le-comptoir-geologique.com/_media/img/large/rhodonite-2-2.jpg"
                },

        "saturday":{
            "day": "Saturday",
            "stone": "Hematite",
            "planet": "Saturn",
            "image": "https://dolphindistributorsltd.com/image/cache/catalog/3785/large/Hematite.2-800x800.jpg"
                },

        "sunday": {
            "day": "Sunday",
            "stone": "Citrine",
            "planet": "Sun",
            "image": "https://cdn11.bigcommerce.com/s-d8b2a/images/stencil/2560w/products/544/1086/Citrine_points__10197.1602692356.jpg?c=2"
                }
            }
    
    app.listen(process.env.PORT||PORT, () =>{
        console.log('server be running')
    })