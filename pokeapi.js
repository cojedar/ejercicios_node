const axios = require('axios');

async function pokemones (){
    try{
        const  data = await axios.get('https://pokeapi.co/api/v2/pokemon')
        return data
    }catch(err){
        console.log(err);
    }
}


module.exports= {pokemones}
