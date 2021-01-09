import React from 'react';

const Home: React.FC = ({}) => {

  return (
    <main className="main">
      <nav>
        <a>ani</a>
        <a>Om</a>
      </nav>
      <section className="first-view">
        <div className="header">
          <h1>Min tonårs-{'\n'}hjärna</h1>
        </div>
        <div className="shapes">
          <div className="rectangle" />
          <div className="triangel" />
          <div className="circle" />
          <div className = "sqaure"/>
        </div>
       
        <p>Under tonårstiden sker det många förändringar i livet. Man kommer in puberteten och kroppen förändras 
mycket. Även hjärnan utvecklas under 
den här tiden. Förstå vad som händer i
din hjärna med hjälp av forsking.</p>
     </section>
    </main>
  );
};

export default Home;
