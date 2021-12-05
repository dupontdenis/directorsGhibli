const express = require('express');
const router = express.Router();
const ctrlDirectors = require('../controllers/directors');


router
    .route('/')
    .get(ctrlDirectors.directorsReadAll);

router
    .route('/:id')
    .get(ctrlDirectors.directorsReadOne)

module.exports = router;