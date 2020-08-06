import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import FormLayout from '../../../layouts/FormLayout';
import { checkObjProps } from '../../../utils/helpers';
import Api from '../../../services/AuthenticationService';

class Login extends Component {
  state = {
    email: '',
    password: '',
    rememberme: true,
    isLoading: false,
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      this.setState({
        [name]: value.trim(),
      });
    }
  };

  handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const { email, password } = this.state;
      const payload = {
        email,
        password,
      };
      if (checkObjProps(payload)) {
        const result = await Api.login({
          email,
          password,
        });
        console.log(result);
      }
    } catch (err) {
      console.error(err);
    }
  };
  render() {
    const { email, password, rememberme } = this.state;
    return (
      <>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <FormLayout>
          <form className='form' noValidate onSubmit={this.handleOnSubmit}>
            <h2 className="title has-text-centered">Login</h2>
            <div className='field'>
              <label htmlFor='login-email' className='label'>
                Email
              </label>
              <div className='control'>
                <input
                  type='email'
                  className='input'
                  name='email'
                  id='login-email'
                  placeholder='username@domain.com'
                  value={email}
                  onChange={this.handleOnChange}
                  required
                />
              </div>
            </div>
            <div className='field'>
              <label htmlFor='login-password' className='label'>
                Password
              </label>
              <div className='control'>
                <input
                  type='password'
                  className='input'
                  name='password'
                  id='login-password'
                  placeholder='Please enter your password'
                  value={password}
                  onChange={this.handleOnChange}
                  required
                />
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <label
                  htmlFor='rememberme'
                  className='checkbox is-flex align-center'>
                  <input type='checkbox' id='rememberme' value={rememberme} />
                  &nbsp; Remember me
                </label>
              </div>
            </div>
            <div className='field is-grouped'>
              <div className='control'>
                <button className='button is-info'>Login</button>
              </div>
              <div className='control'>
                <NavLink className='button is-info is-light' to='/register'>
                  Register
                </NavLink>
              </div>
            </div>
          </form>
        </FormLayout>
      </>
    );
  }
}

export default Login;
