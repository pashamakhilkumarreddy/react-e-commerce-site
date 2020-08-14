const {
  isValidEmail,
  isValidPassword,
  emptyEmailText,
  emptyPasswordText,
} = require('../utils');
module.exports = {
  validateAuthFields(ctx, next) {
    try {
      const {
        email,
        password,
      } = ctx.request.body;
      const trimmedEmail = email &&
        (typeof email === 'string') && email.trim();
      const trimmedPassword = password &&
        (typeof password === 'string') && password.trim();
      const errors = [];
      if (!trimmedEmail) {
        errors.push(emptyEmailText);
      }
      if (!trimmedPassword) {
        errors.push(emptyPasswordText);
      }
      if (errors.length) {
        ctx.response.status = 401;
        ctx.body = {
          status: 401,
          success: false,
          statusMessages: [
            ...errors,
          ],
        };
        return;
      }
      const validEmail = isValidEmail(trimmedEmail);
      const validPassword = isValidPassword(trimmedPassword);
      if (!validEmail.isValid) {
        errors.push(validEmail.message);
      }
      if (!validPassword.isValid) {
        errors.push(validPassword.message);
      }
      if (errors.length) {
        ctx.response.status = 401;
        ctx.body = {
          status: 401,
          success: false,
          statusMessages: [
            ...errors,
          ],
        };
        return;
      }
      ctx.request.body.email = trimmedEmail;
      ctx.request.body.password = trimmedPassword;
      return next();
    } catch (err) {
      console.error(err);
      res.status(500).send({
        success: false,
        statusMessages: [
          'Internal server error',
        ],
      });
    }
  },
};
