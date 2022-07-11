const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors())

app.get('/', (req, res) => {
    console.log('your response is working')
    res.sendFile(__dirname + '/index.html')
})


app.get('/api/:day', (req,res) =>{
    const dayVariable = req.params.crystals.toLowerCase()
    if(crystals[days]){
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
        
        "Tuesday" : {
            "stone": "Jasper",
            "planet": "Mars"
            },
    
        "Wednesday": {
            "stone":"Hematite",
            "planet":"Mercury"
        },

        "Thursday": {
            "stone":"Aventurine",
            "planet": "Jupiter"
                },

        "Friday": {
            "stone":"Rhodonite",
            "planet": "Venus"
                },

        "Saturday":{
            "stone": "Hematite",
            "planet": "Saturn"
                },

        "Sunday": {
            "stone": "Citrine",
            "planet": "Sun"
                }
            }
    
    app.listen(process.env.PORT||PORT, () =>{
        console.log('server be running')
    })