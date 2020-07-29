import React, { memo } from 'react';
import './footer.scss';

const Footer = () =>
  (<footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>E-commerce Application </strong> by &nbsp;
        <a href="https://github.com/pashamakhilkumarreddy" target="_blank" 
        rel="noopener noreferrer">
          Pasham Akhil Kumar Reddy
        </a>
      </p>
    </div>
  </footer>)

export default memo(Footer);
