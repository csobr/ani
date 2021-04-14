import React from 'react';

type Image = {
  image: string;
  alt: string;
  size: number;
};
const Image = ({image, alt, size}: Image) => <img src={image} alt={alt} style={{width: size}} className="image" />;
export default Image;
