import React from 'react';

const FirstView = () => {
  return (
    <section className="first-view">
      <div className="header">
        <h1>The teenage{'\n'}brain</h1>
        <br />
        <div className="app-description">
          <p>
            During adolescence, many changes take place in life. As a teenager, you enter puberty and the body changes a
            lot. The brain also develops during this time. With the help of research, you can better understand what is
            happening in your brain.
          </p>
        </div>
      </div>
      <div className="shapes">
        <div className="rectangle" />
        <div className="triangel" />
        <div className="circle" />
        <div className="sqaure" />
      </div>
    </section>
  );
};

export default FirstView;
