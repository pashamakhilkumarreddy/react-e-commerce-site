import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import FormLayout from '../../../layouts/FormLayout';
import { checkObjProps } from '../../../utils/helpers';
import { register } from '../../../store/actions/Authentication';

class Register extends Component {
  state = {
    email: '',
    password: '',
    termsAndConditions: false,
    isLoading: false,
  };

  static propTypes = {};

  componentDidMount = () => {
    if (this.props.auth?.authenticated) {
      this.props.history.push('/login');
    }
  };

  componentDidUpdate = () => {
    if (this.props.auth?.authenticated) {
      this.props.history.push('/login');
    }
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
      const { email, password, termsAndConditions } = this.state;
      const payload = {
        email,
        password,
        termsAndConditions,
      };
      // if (checkObjProps(payload)) {
        this.props.register({
          email,
          password,
        });
      // }
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { email, password, termsAndConditions } = this.state;
    return (
      <>
        <Helmet>
          <title>Register</title>
        </Helmet>
        <FormLayout>
          <form className='form' noValidate onSubmit={this.handleOnSubmit}>
            <h2 className='title has-text-centered'>Register</h2>
            <div className='field'>
              <label htmlFor='register-email' className='label'>
                Email
              </label>
              <div className='control'>
                <input
                  type='email'
                  className='input'
                  name='email'
                  id='register-email'
                  placeholder='username@domain.com'
                  value={email}
                  onChange={this.handleOnChange}
                  autoComplete='off'
                  required
                />
              </div>
            </div>
            <div className='field'>
              <label htmlFor='register-password' className='label'>
                Password
              </label>
              <div className='control'>
                <input
                  type='password'
                  className='input'
                  name='password'
                  id='register-password'
                  placeholder='Please enter your password'
                  value={password}
                  onChange={this.handleOnChange}
                  autoComplete='off'
                  required
                />
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <label
                  htmlFor='termsAndConditions'
                  className='checkbox is-flex align-center'
                >
                  <input
                    type='checkbox'
                    id='termsAndConditions'
                    value={termsAndConditions}
                  />
                  &nbsp; I agree to all the terms and conditions
                </label>
              </div>
            </div>
            <div className='field is-grouped'>
              <div className='control'>
                <button className='button is-info'>Register</button>
              </div>
              <div className='control'>
                <NavLink className='button is-info is-light' to='/login'>
                  Login
                </NavLink>
              </div>
            </div>
          </form>
        </FormLayout>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    authentication
  } = state;
  const auth = {
    ...authentication,
  };
  return {
    auth
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  register,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Register));
