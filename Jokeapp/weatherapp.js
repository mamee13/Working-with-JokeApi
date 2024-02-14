// Learning API's by Using an external api from JokeApi Documentation here is the website (https://sv443.net/jokeapi/v2/) 
// Creating a server to get the data from Jokeapi 
const express = require('express');
const http = require('https');
const app = express();

app.get('/', (req, res) =>{
    const url = 'https://v2.jokeapi.dev/joke/Programming,Dark';
    http.get(url,  (response) =>{
        console.log(res.statusCode)

        response.on('data', (data) =>{
            const value = JSON.parse(data);
            // console.log(value);
            const single = value.type;
            const person1 = value.setup;
            const person2 = value.delivery;

            if(single === 'single') {
                console.log(`Joke ${value.joke}`)
                res.send(`<h1> the joke is</h1>
                        <h2>XO: ${value.joke}`)
            }
            else{
                console.log(`pesron1: ${person1}`);
                console.log(`pesron2: ${person2}`);

                res.send(`<h1> the joke is</h1>
                        <h2>pesron1: ${person1}</h2>
                        <h2>pesron2: ${person2}</h2> ` );
            }
        })
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is runing on ${port}`));