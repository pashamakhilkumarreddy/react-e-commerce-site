const Koa = require('koa');
const cors = require('@koa/cors');
const body = require('koa-body');
const helmet = require('koa-helmet');
const compression = require('koa-compress');
const responseTime = require('koa-response-time');
const rateLimit = require('koa-ratelimit');

const {
  server,
} = require('./config');
const {
  getDBURI,
  connectToDB,
} = require('./utils/dbcon');

const app = new Koa();
const db = new Map();
const PORT = server.PORT;

app.use(cors())
  .use(body())
  .use(helmet())
  .use(compression())
  .use(responseTime({
    hrtime: true,
  }))
  .use(rateLimit({
    driver: 'memory',
    db,
    duration: 100000,
    id: (ctx) => ctx.ip,
    headers: {
      remaining: 'Rate-Limit-Remaining',
      reset: 'Rate-Limit-Reset',
      total: 'Rate-Limit-Total',
    },
    max: 150,
    disableHeader: false,
  }));

require('./routes')({
  app,
});

getDBURI().then((dbURI) => {
  connectToDB(dbURI).then(() => {
    console.info('Connected to the database');
    app.listen(PORT, () => {
      console.info(`The server is up and running on port ${PORT}`);
    });
  }).catch((err) => {
    console.error(err);
  });
});
