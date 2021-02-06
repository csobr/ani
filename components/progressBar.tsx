import React from 'react';

type Props = {
  value: number;
  max: number;
};
const ProgressBar = ({value, max}: Props) => {
  max = 100;
  return (
    <div className="progress-bar">
      <progress value={(value * 100) / value} max={max} />
      <span>{value * max}%</span>
    </div>
  );
};

export default ProgressBar;
