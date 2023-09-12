const axios = require('axios');

const find = async () => {
  try {
    return await axios.get('https://ghibliapi.vercel.app/films');
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  find
}
