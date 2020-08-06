import React, { memo } from 'react';
import './loader.scss';

const Loader = () =>
  <div className="loader-container">
    <div className="loader"></div>
  </div>

export default memo(Loader);