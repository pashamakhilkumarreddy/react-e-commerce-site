const constants = require('./constants');
const regex = require('./regex');
const urls = require('./urls');
const validations = require('./validations');
const helpers = require('./helpers');

module.exports = {
  ...constants,
  ...regex,
  ...urls,
  ...validations,
  ...helpers,
};
