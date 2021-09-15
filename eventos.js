const { EventEmiter: emisorEventos } = require('events');
//const emisorEventos = eventos.EventEmitter;

const evento = new emisorEventos();

evento.emit['data' , Date.now];

setInterval(()=>{
    evento.emit['data', Date.now()]

},500)

module.exports = { evento };
