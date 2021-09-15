const http = require('http');
const server = new http.Server();
const fs = require('fs');

server.on('request',(req, res)=>{
    if(req.url == '/'){
        const info = await obtenerArchivo2 ({path: './views/inex.html'})
        res.end(info);
    }
})

function obtenerArchivo(path, res) {
    fs.readFile(path,(err, info) =>{
        if(err){ res.end('error')}
        res.end(info);
    });
}

const obtenerArchivo2 = (path) =>
    new Promise((resolve, reject) => {
		fs.readFile(path,(err, info) =>{
            if(err) {reject('error')}
            resolve(info);
        });
    });



server.listen(8001);