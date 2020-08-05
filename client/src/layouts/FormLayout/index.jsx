import React from 'react';
import PropTypes from 'prop-types';
import './layout.scss';

const FormLayout = ({ children }) => {
  return (
    <div className="columns is-mobile is-centered is-vcentered">
      <div className="column is-11-mobile is-8-tablet is-6-desktop is-6-widescreen
       is-6-fullhd">
        {
          children
        }
      </div>
    </div>
  )
}

FormLayout.propTypes = {
  children: PropTypes.any.isRequired,
}

export default FormLayout;