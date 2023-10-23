const express = require('express');
const cors = require('cors');
const http = require('http');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = http.createServer(this.app);
        this.fineTuning = '/api/finetuning';
        this.middleware();
        this.router();
    }

    middleware() {
        this.app.use( cors() );
        this.app.use( express.json() ); //parse del body
        this.app.use(express.static('public')); 
    }

    router (){
        this.app.use (this.fineTuning, require('../routers/finetuning'))
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log("Servidor corriendo")
        })
    }
}



module.exports = Server;