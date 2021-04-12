import React from 'react';

type Props = {
  show: boolean;
};
const Loading = () => {
  const [loading, setLoading] = React.useState(true);
  return (
    <div className="loader">
      {loading ? (
        <div className="shapes">
          <div className="rectangle" />
          <div className="triangel" />
        </div>
      ) : null}
    </div>
  );
};

export default Loading;
