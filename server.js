import Cano from 'cano-koa';
import parser from 'koa-bodyparser';
import logger from 'koa-logger';
/* import routes from './api/routers/users.js' */

const app = new Cano(__dirname);

app.use(logger());
app.use(parser());
/* app.use(routes.routes()); */

app.on('error', err => {
  app.log.error('server error', err);
});

app.up().then(server => {
  
}).catch(err => {
  app.log.error('Error on ', err);  
  app.use(routers.routes())
});