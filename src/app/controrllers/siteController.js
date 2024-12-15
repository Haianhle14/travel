const Tour = require('../models/Tour');

class SiteController {
  index(req, res, next) {
    Tour.find({}).lean() // Không dùng callback
      .then((tours) => res.render('home', { tours }))
      .catch(next); // 'next' xử lý lỗi
  }
}


module.exports = new SiteController();
