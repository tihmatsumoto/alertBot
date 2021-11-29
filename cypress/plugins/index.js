require("dotenv").config();

module.exports = (on, config) => {
  config.env.email = process.env.EMAIL;
  config.env.pass = process.env.PASS;

  return config;
};
