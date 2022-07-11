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
            "stone": "Selenite", 
            "planet": "Moon"
        },
        
        "tuesday" : {
            "stone": "Jasper",
            "planet": "Mars"
            },
    
        "wednesday": {
            "stone":"Hematite",
            "planet":"Mercury"
        },

        "thursday": {
            "stone":"Aventurine",
            "planet": "Jupiter"
                },

        "friday": {
            "stone":"Rhodonite",
            "planet": "Venus"
                },

        "saturday":{
            "stone": "Hematite",
            "planet": "Saturn"
                },

        "sunday": {
            "stone": "Citrine",
            "planet": "Sun"
                }
            }
    
    app.listen(process.env.PORT||PORT, () =>{
        console.log('server be running')
    })