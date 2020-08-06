require('dotenv').config();

module.exports = {
  server: {
    PORT: process.env.PORT || 7000,
  },
  db: {
    mongo: {
      DB_HOST: process.env.DB_HOST || 'localhost',
      DB_PORT: process.env.DB_PORT || 27017,
      DB_NAME: process.env.DB_NAME || 'test',
      DB_USER: process.env.DB_USER || 'test',
      DB_PASS: process.env.DB_PASS || 'test',
    },
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET || '2g3YAR8xRAaEVZubw4AwVa8nf1vhLlMx$df',
    JWT_REFRESH_TOKEN_EXPIRY: process.env.JWT_REFRESH_TOKEN_EXPIRY || '1m',
    JWT_ACCESS_TOKEN_EXPIRY: process.env.JWT_ACCESS_TOKEN_EXPIRY || '30m',
    JWT_ISSUER: process.env.JWT_ISSUER || 'johndoe',
  },
};
