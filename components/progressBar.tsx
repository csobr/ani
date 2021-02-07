import React from 'react';

type Props = {
  value: number;
  max: number;
  question: string;
};

const ProgressBar = ({value, max, question}: Props) => {
  max = 100;

  return (
    <div className="progress-bar">
      <progress value={value} max={max} />
      <span>
        {question}
        {'\n'}
        {value}%
      </span>
    </div>
  );
};

export default ProgressBar;
