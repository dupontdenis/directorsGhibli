const db = require('../models/index');
const utils = require('./utils/trans')
const debug = require('debug')('app_server');


const directorsReadAll = async (req, res) => {

    try {
        const { data: films } = await db.find();

        let directors = utils.directors(films);

        res.render('directors', { directorsFilms:utils.format(directors)  });

    } catch (error) {
        console.error(error);
    }

};

const directorsReadOne = async (req, res) => {
    console.log(req.params.id);
    try {
        let { data: films } = await db.find();
        films = films.filter(({ director }) => director == req.params.id)

        res.render('index', { films });

    } catch (error) {
        console.error(error);
    }
};


module.exports = {
    directorsReadAll,
    directorsReadOne,
};