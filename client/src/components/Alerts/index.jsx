import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

class Alerts extends Component {
  static propTypes = {
    message: PropTypes.string,
    type: PropTypes.string,
  }

  componentDidUpdate = () => {
    const MySwal = withReactContent(Swal);
    const {message, type} = this.props;
    MySwal.fire({
      toast: true,
      position: 'top-end',
      // title: '',
      text: message,
      timer: 3000,
      timerProgressBar: true,
      icon: type,
      showCloseButton: true,
      showConfirmButton: false,
    })
  }

  render() {
    return <></>
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.alerts,
  }
}

export default connect(mapStateToProps, null)(Alerts);