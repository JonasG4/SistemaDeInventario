module.exports = {
    PORT: process.env.PORT,
    DB: {
        host: process.env.HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
        dialect: "postgres"     
    }
    
}