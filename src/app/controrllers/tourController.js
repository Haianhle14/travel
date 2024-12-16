const Tour = require('../models/Tour');

class TourController {
    //[GET] /tours/:slug
    show(req, res, next) {
        Tour.findOne({slug: req.params.slug}).lean()
        .then(tours => {
            res.render('tours/show', { tours });
        }) 
        .catch(next);
    }

    //[GET] /tours/create
    create(req, res, next) {
        res.render('tours/create');
    }

    //[POST] /tours/store
    store(req, res, next) {
        res.json(req.body)
    }
}

module.exports = new TourController();