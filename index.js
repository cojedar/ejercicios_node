const express = require('express')
const pokeapi = require('./pokeapi')

const app = express();

app.listen(8000, ()=>{
    console.log('servidor cargado en el puerto')
})

//app.get('/',(req, res) => {
//    res.status(200).send('hola mundo')
//})

app.get('/', async (req, res) => {
    const {data:{results}} = await pokeapi.pokemones();
    //console.log(results);
    res.render('index.ejs', {pokemones : results});
});

