require('dotenv').config();

module.exports = {
  server: {
    PORT: process.env.PORT || 6000,
  },
  db: {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || 27017,
    DB_USER: process.env.DB_USER || 'test',
    DB_PASS: process.env.DB_PASS || 'test',
    DB_NAME: process.env.DB_NAME || 'test',
  },
  jwt: {},
};
