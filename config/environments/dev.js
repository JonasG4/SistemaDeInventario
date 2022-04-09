module.exports = {
  //CONFIG SERVER
  PORT: process.env.PORT || 3000,

  //CONFIG DATABASE
  host: process.env.HOST || "127.0.0.1",
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME ||  "DB_SYSMP",
  dialect: "postgres",

  //CONFIG JWT
  secret: process.env.AUTH_SECRET,
  expires: process.env.AUTH_EXPIRES,
  rounds: process.env.AUTH_ROUNDS,
  
  // //SEEDERS
  // seederStorage: "sequelize",
  // seederStorageTable: "seeds",

  // //MIGRATIONS
  // migrationStorege: "sequelize",
  // migrationStoregeTableName: "migrations",

  define: {
    timestamps: false,
    underscored: true,
  },
};
