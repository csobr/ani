import React from 'react';

const Loading = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
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
