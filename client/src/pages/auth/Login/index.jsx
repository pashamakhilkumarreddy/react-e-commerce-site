import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FormLayout from '../../../layouts/FormLayout';
import { checkObjProps } from '../../../utils/helpers';
import { login } from '../../../store/actions/Authentication';

class Login extends Component {
  state = {
    email: '',
    password: '',
    rememberme: true,
    isLoading: false,
  };

  componentDidMount = () => {
    if (
      this.props.authentication.authenticated &&
      checkObjProps(this.props.authentication.tokens)
    ) {
      this.props.history.push('/products');
    }
  };

  componentDidUpdate = () => {
    if (
      this.props.authentication.authenticated &&
      checkObjProps(this.props.authentication.tokens)
    ) {
      this.props.history.push('/products');
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
      const { email, password } = this.state;
      const payload = {
        email,
        password,
      };
      if (checkObjProps(payload)) {
        this.props.login(payload);
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
          <form className="form" noValidate onSubmit={this.handleOnSubmit}>
            <h2 className="title has-text-centered">Login</h2>
            <div className="field">
              <label htmlFor="login-email" className="label">
                Email
              </label>
              <div className="control">
                <input
                  type="email"
                  className="input"
                  name="email"
                  id="login-email"
                  placeholder="username@domain.com"
                  value={email}
                  onChange={this.handleOnChange}
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="login-password" className="label">
                Password
              </label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  name="password"
                  id="login-password"
                  placeholder="Please enter your password"
                  value={password}
                  onChange={this.handleOnChange}
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label
                  htmlFor="rememberme"
                  className="checkbox is-flex align-center"
                >
                  <input type="checkbox" id="rememberme" value={rememberme} />
                  &nbsp; Remember me
                </label>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-info">Login</button>
              </div>
              <div className="control">
                <NavLink className="button is-info is-light" to="/register">
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

const mapStateToProps = (state) => {
  const {authentication} = state;
  return { authentication };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ login }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
