const {v4: uuidv4, v1: uuidv1} = require('uuid');

const genUserName = () => uuidv4();

const genProductId = () => uuidv1();

module.exports = {
  genUserName,
  genProductId,
};
