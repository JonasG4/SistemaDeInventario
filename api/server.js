const { rejects } = require('assert');
const express = require('express');
const { resolve } = require('path');
const logger = require('morgan');
class Server{
    constructor({config, router}){
        this._config = config;
        this._express = express();
        this._express.use(router);
        this._express.use(logger('dev'))
    }

    start() {
        return new Promise((resolve, reject) => {
            const http = this._express.listen(this._config.PORT, () => {
                const { port } = http.address();
                console.log("Application is running on: http://localhost:" + port);
                resolve();
            })
        })
    }
}

module.exports = Server;