const knex = require('knex');
const configs = require('../../knexfile');

const connection = knex(configs.development);

module.exports = connection;
