import React from 'react';

const Loading: React.FC = ({}) => {
  const [loading, setLoading] = React.useState(false);
  return <>{loading ? <div>Laoding..</div> : <h1></h1>}</>;
};
