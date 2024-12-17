const siteRouter = require('./site');
const meRouter = require('./me');
const toursRouter = require('./tours');

function router(app) {
  app.use('/me', meRouter);
  app.use('/tours', toursRouter);
  app.use('/', siteRouter);


}

module.exports = router;
