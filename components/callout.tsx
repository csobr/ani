import React from 'react';

type Text = {
  text: string;
};
const Callout = ({text}: Text) => {
  return (
    <div className="callout">
      <p>{text}</p>
    </div>
  );
};

export default Callout;
