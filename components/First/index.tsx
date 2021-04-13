import React from 'react';

type Props = {
  content: any;
};
const FirstItem = ({content}: Props) => {
  return (
    <section className="first-view">
      <div className="header">
        <h1>Min tonårs-{'\n'}hjärna</h1>
        <br />
        <div className="app-description">
          <p>
            Under tonårstiden sker det många förändringar i livet. Man kommer in puberteten och kroppen förändras
            mycket. Även hjärnan utvecklas under den här tiden. Förstå vad som händer i din hjärna med hjälp av
            forsking.
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

export default FirstItem;
