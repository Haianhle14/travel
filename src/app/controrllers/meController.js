const Tour = require('../models/Tour');

class MeController {
    //[GET] me/store/tours
    storeTours(req, res, next) {
        Tour.find({}).lean()
            .then(tours => res.render('me/store-tours', { tours }))
            .catch(next);
        
    }

    //[GET] me/trash/tours
    trashTours(req, res, next) {
        Tour.findWithDeleted({deleted:true}).lean()
        .then(tours => res.render('me/trash-tours', { tours }))
        .catch(next);
    }
    
}


module.exports = new MeController();
