const commonConfig = {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialect: "postgres",
  operatorsAliases: false
};

const useSSL = !(/false/i.test(process.env.DF_DB_SSL || ''));

const config = {
  "development": Object.assign({}, commonConfig, {
    username: (process.env.DF_DB_USERNAME || "postgres"),
    password: (process.env.DF_DB_PASSWORD || "postgres"),
    database: (process.env.DF_DB_NAME || "devfarm_development"),
    host: (process.env.DF_DB_HOST || '127.0.0.1'),
    port: (process.env.DF_DB_PORT || 5432),
  }),
  "test": Object.assign({}, commonConfig, {
    username: (process.env.DF_DB_USERNAME || "postgres"),
    password: (process.env.DF_DB_PASSWORD || "postgres"),
    database: "devfarm_test",
    host: "127.0.0.1",
  }),
  "staging": Object.assign({}, commonConfig, {
    username: process.env.DF_DB_USERNAME,
    password: process.env.DF_DB_PASSWORD,
    database: (process.env.DF_DB_NAME || "devfarm_staging"),
    host: process.env.DF_DB_HOST,
    port: (process.env.DF_DB_PORT || 5432),
    ssl: useSSL,
    dialectOptions: { ssl: useSSL },
  }),
  "production": Object.assign({}, commonConfig, {
    username: process.env.DF_DB_USERNAME,
    password: process.env.DF_DB_PASSWORD,
    database: (process.env.DF_DB_NAME || "devfarm_production"),
    host: process.env.DF_DB_HOST,
    port: (process.env.DF_DB_PORT || 5432),
    ssl: useSSL,
    dialectOptions: { ssl: useSSL },
  })
};

// if (process.env.NODE_ENV === 'development') console.log("DB CONFIG:", config[process.env.NODE_ENV]);

module.exports = config;

