const debug = require('debug')('app_server');
const db = require('../models/index');

const filmsReadAll = async (req, res) => {
  try {
    const { data: films } = await db.find();
    res.render('index', { films });

  } catch (error) {
    console.error(error);
  }
};

const filmsReadOne = async (req, res) => {

  try {
    const { data: films } = await db.find();
    const film = films.find((film) => film.id == req.params.id)

    res.render('film', { film });

  } catch (error) {
    console.error(error);
  }

};

module.exports = {
  filmsReadAll,
  filmsReadOne
};