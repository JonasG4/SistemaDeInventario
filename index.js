const container = require('./api/container');

const app = container.resolve("app");

app.start().catch(err =>{
    console.log(err);
    process.exit();
});