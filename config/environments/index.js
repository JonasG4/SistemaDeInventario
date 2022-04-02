require('dotenv').config();

const PRODUCTION = require("./production");
const DEVELOPMENT = require("./development");
const TEST = require("./test");
const {NODE_ENV} = process.env;

let currentEnv = DEVELOPMENT;

if(NODE_ENV === "production"){
    currentEnv = PRODUCTION;
}else if(NODE_ENV === "test"){
    currentEnv = TEST;
}

module.exports = currentEnv;