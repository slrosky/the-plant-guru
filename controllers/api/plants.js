const request = require("request");
const fetch = require("node-fetch");
const token = process.env.TREFLE_TOKEN;
const rootURL = `https://trefle.io/api/v1/plants?token=${token}`;

module.exports = {
  plants,
};

function plants(req, res, next) {
  console.log("hitting router");
  fetch(rootURL)
    .then((res) => res.json())
    .then((data) => res.send({ data }));
}
