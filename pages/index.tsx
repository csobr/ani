import FirstItem from '@components/First';
import SecondItem from '@components/Second';
import React from 'react';

const Home: React.FC = ({}) => {
  return (
    <main className="main">
      <nav>
        <img src = "logo.png" alt = "logo"></img>
        <a>Om</a>
      </nav>
      <FirstItem />
      <SecondItem/>
    </main>
  );
};

export default Home;
