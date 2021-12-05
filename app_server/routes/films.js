const express = require('express');
const router = express.Router();
const ctrlFilms = require('../controllers/films');


router
    .route('/')
    .get(ctrlFilms.filmsReadAll);

    router
    .route('/:id')
    .get(ctrlFilms.filmsReadOne);


module.exports = router;