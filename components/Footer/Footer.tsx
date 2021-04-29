import React from 'react';

const Footer = () => {
  const getYear: Date = new Date();

  return (
    <footer>
      <p>ani</p>
      {getYear.getFullYear()}
    </footer>
  );
};

export default Footer;
