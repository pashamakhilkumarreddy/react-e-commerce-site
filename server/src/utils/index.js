const constants = require('./constants');
const regex = require('./regex');
const urls = require('./urls');
const validations = require('./validations');

module.exports = {
  ...constants,
  ...regex,
  ...urls,
  ...validations,
};
