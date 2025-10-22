const axios = require("axios");

const find = async () => {
  try {
    return await axios.get("https://ghibliapi.dev/films");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  find,
};
