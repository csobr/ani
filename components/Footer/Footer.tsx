import React from 'react';

const Footer = () => {
  const getYear = () => new Date().getFullYear();
  return (
    <footer>
      <p>ani</p>
      {getYear()}
    </footer>
  );
};

export default Footer;
