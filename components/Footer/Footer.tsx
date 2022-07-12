import React from 'react';

const Footer = () => {
  const getYear: Date = new Date();

  return (
    <footer>
      <p>
        Made by <a href="https://sihamhadi.com/">srh</a>
      </p>
      {getYear.getFullYear()}
    </footer>
  );
};

export default Footer;
