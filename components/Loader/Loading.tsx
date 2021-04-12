import React from 'react';

type Props = {
  show: boolean;
};
const Loading = () => {
  const [loading, setLoading] = React.useState(true);
  return <>{loading ? <div>Loading..</div> : null}</>;
};

export default Loading;
