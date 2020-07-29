module.exports = {
  async register(ctx) {
    try {
      ctx.response.status = 201;
      ctx.body = {
        status: 201,
        statusMessages: [
          'Successfully registered a new user',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
  async login(ctx) {
    try {
      ctx.response.status = 200;
      ctx.body = {
        status: 200,
        statusMessages: [
          'Successfully logged in',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
};
