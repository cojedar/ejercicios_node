const express = require('express')
const http = require('http')

const app = express();

app.set()

app.get('/',(req, res) => {
    res.status(200).send('hola mundo')
})

http.createServer(app).listen(8001, ()=>{
    console.log("ado por el puerto 8001")
})