import React from 'react';

type Image = {
  image: string;
  alt: string;
  size: number;
  imageRef: any;
};
const Image = ({image, alt, size, imageRef}: Image) => (
  <img src={image} ref={imageRef} alt={alt} style={{width: size}} className="image" />
);
export default Image;
