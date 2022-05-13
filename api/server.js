const { rejects } = require("assert");
const express = require("express");
const { resolve } = require("path");
const cors = require("cors");
const logger = require("morgan");
const cookieParse = require("cookie-parser");
const csurf = require("csurf");
const helmet = require("helmet");

class Server {
  constructor({ config, router }) {
    this._config = config;
    this._express = express();
    this._express.use(cookieParse());
    this._express.use(router);
  }
  start() {
    return new Promise((resolve, reject) => {
      const isProduction = this._config === "PRODUCTION";
      this._express.use(logger("dev"));

      this._express.use(
        helmet({
          contentSecurityPolicy: false,
        })
      );

      this._express.use(
        csurf({
          cookie: {
            sameSite: isProduction,
            secure: isProduction,
            httpOnly: true,
          },
        })
      );
      const http = this._express.listen(this._config.PORT, () => {
        const { port } = http.address();
        console.log("Application is running on: http://localhost:" + port);
        resolve();
      });
    });
  }
}

module.exports = Server;
