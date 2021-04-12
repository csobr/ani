import React, {useState} from 'react';

const Error = () => {
  const [error, setError] = useState(true);
  if (error) return <div>Something went wrong..</div>;
  return null;
};

export default Error;
