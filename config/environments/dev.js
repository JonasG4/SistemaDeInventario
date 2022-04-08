module.exports = {
  //CONFIG SERVER
  PORT: process.env.PORT || 3000,

  //CONFIG DATABASE
  host: process.env.HOST || "127.0.0.1",
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB || "DB_SYSMP",
  dialect: "postgres",

  //CONFIG SEQUELIZE

  //SEEDERS
  seederStorage: "sequelize",
  seederStorageTable: "seeds",

  //MIGRATIONS
  migrationStorege: "sequelize",
  migrationStoregeTableName: "migrations",

  define: {
    timestamps: false,
    underscored: true,
  },
};
