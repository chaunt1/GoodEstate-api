const {} = require('../middleware');
const controller = require('../controllers/data.controller');

module.exports = function(app) {
  app.use((req,res,next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get('/api/data/page/:page', controller.getAll);
  app.get('/api/data/item/:id', controller.getDetail);
}