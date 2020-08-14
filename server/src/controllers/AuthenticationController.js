const {User} = require('../models');
const {
  genUserName,
} = require('../utils');

module.exports = {
  async register(ctx) {
    try {
      const {
        email,
        password,
      } = ctx.request.body;
      const user = await User.findOne({
        email,
      });
      if (!user) {
        const newUser = new User({
          email,
          username: genUserName(),
          password,
        });
        if (!newUser) {
          throw new Error('Unable to create a new user');
        }
        await newUser.save();
        ctx.response.status = 201;
        ctx.body = {
          status: 201,
          success: true,
          user: newUser.formattedUserObj(),
          statusMessages: [
            'Successfully created a new user',
          ],
        };
        return;
      }
      ctx.response.status = 403;
      ctx.body = {
        status: 403,
        success: false,
        statusMessages: [
          'A user with the provided email already exists',
          'Please login in',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        status: 500,
        success: false,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
  async login(ctx) {
    try {
      const {
        email,
        password,
      } = ctx.request.body;
      const user = await User.findOne({
        email,
      });
      if (!user) {
        ctx.response.status = 401;
        ctx.body = {
          status: 401,
          success: false,
          statusMessages: [
            'No user exists with the provided email',
          ],
        };
        return;
      }
      const isValidPassword = await user.comparePassword(password);
      if (!isValidPassword) {
        ctx.response.status = 401;
        ctx.body = {
          status: 401,
          success: false,
          statusMessages: [
            'Invalid user information. Please check your input',
          ],
        };
        return;
      }
      ctx.response.status = 200;
      ctx.body = {
        status: 200,
        success: true,
        tokens: {
          refresh_token: await user.genRefreshToken(),
          access_token: await user.genAccessToken(),
        },
        user: user.formattedUserObj(),
        statusMessages: [
          'Successfully logged in',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        status: 500,
        success: false,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
};
