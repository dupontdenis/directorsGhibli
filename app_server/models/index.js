const axios = require('axios');

const find = async () => {
  try {
    return await axios.get('https://ghibliapi.herokuapp.com/films');
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  find
}