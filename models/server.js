const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersRoutePath = '/api/users';

        //Middelwares
        this.midelwares();


        //Read Body 
        this.app.use(express.json());

        //Rutas de la app
        this.routes();
    }

    midelwares() {
        //CORS
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersRoutePath, require('../routes/user.routes'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Puerto corriendo en ', this.port);
        })
    }
}


module.exports = Server