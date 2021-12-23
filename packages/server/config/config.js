require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_DATABASE,
    host: process.env.DB_DEV_HOST,
    port: process.env.DB_DEV_PORT,
    dialect: "postgres",
    dialectOptions: {
      socketPath: process.env.DB_DEV_HOST,
    },
    operatorsAliases: false,
    use_env_variable: true,
  },
  test: {
    username: process.env.DB_TEST_USER,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_TEST_DATABASE,
    host: process.env.DB_TEST_HOST,
    port: process.env.DB_TEST_PORT,
    dialect: "postgres",
    operatorsAliases: false,
  },
  production: {
    // host: process.env.DB_HOST,
    username: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    // username: process.env.DB_PROD_USER,
    // password: process.env.DB_PROD_PASSWORD,
    // database: process.env.DB_PROD_DATABASE,
    // host: process.env.DB_PROD_HOST,
    // port: process.env.DB_PROD_PORT,
    dialect: "postgres",
    dialectOptions: {
      socketPath: process.env.DB_HOST,
    },
    logging: false,
    operatorsAliases: false,
    // use_env_variable: true
  },
};
