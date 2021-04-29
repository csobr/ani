import React from 'react';

type ColorProp = {
  color: string;
};
const Border = ({color}: ColorProp) => {
  return <div className="border" style={{backgroundColor: color}} />;
};
export default Border;
