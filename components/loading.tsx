import React from 'react';

type Props = {
  show: boolean;
};
const Loading = ({show}: Props) => {
  const [loading, setLoading] = React.useState(show);
  return <>{loading ? <div>Loading..</div> : null}</>;
};

export default Loading;
