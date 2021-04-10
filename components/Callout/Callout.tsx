import React from 'react';

type Props = {
  text: string;
  borderColor: string;
  backgroundColor: string;
  textColor: string;
};
const Callout = ({text, backgroundColor, borderColor, textColor}: Props) => {
  return (
    <div className="callout" style={{backgroundColor: backgroundColor, borderColor: borderColor}}>
      <p style={{color: textColor}}>{text}</p>
    </div>
  );
};

export default Callout;
