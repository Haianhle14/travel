const Tour = require('../models/Tour');

class MeController {
    //[GET] me/store/tours
    storeTours(req, res, next) {
        Tour.find({}).lean()
            .then(tours => res.render('me/store-tours', { tours }))
            .catch(next);
        
    }
    
}


module.exports = new MeController();
