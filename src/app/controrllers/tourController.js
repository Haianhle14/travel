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

    //[GET] /tours/:id/edit
    edit(req, res, next) {
        Tour.findById(req.params.id).lean()
            .then(tours => res.render('tours/edit', { tours }))
            .catch(next)
        
    }

    //[PUT] /tours/:id
    update(req, res, next) {
        Tour.updateOne({_id: req.params.id}, req.body)
            .then(()=>res.redirect('/me/store/tours'))
            .catch(next)
    }

    destroy(req, res, next) {
        Tour.delete({_id: req.params.id}, req.body)
            .then(()=>res.redirect('back'))
            .catch(next);
    }

    //[POST] /tours/store
    store(req, res, next) {
        req.body.image = `${req.body.image}.jpg`;
        const tour = new Tour(req.body);
        tour.save()
            .then(() => res.redirect('/')) 
            .catch(error => {

            }) 
      }
}

module.exports = new TourController();