const defaults = require('./config.default')
let BASE = null,
  SERVER_ENV = process.env.SERVER_ENV
if (SERVER_ENV) {
  BASE = require(`./config.${SERVER_ENV}`)
}
module.exports = Object.assign(defaults, BASE)
