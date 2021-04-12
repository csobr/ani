import React from 'react';

type Props = {
  value: any;
  question: string;
};

const ProgressBar = ({value, question}: Props) => {
  const max = 100;

  return (
    <div className="progress-bar">
      <progress value={value || 0} max={max} />
      <span>
        {question}
        {'\n'}
        {value}%
      </span>
    </div>
  );
};

export default ProgressBar;
