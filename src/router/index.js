const siteRouter = require('./site');
const toursRouter = require('./tours');

function router(app) {
  app.use('/tours', toursRouter);
  app.use('/', siteRouter);


}

module.exports = router;
