import FirstItem from '@components/First';
import SecondItem from '@components/Second';
import fetchFromCMS from 'lib/service';
import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="main">
      <nav>
        <img src="logo.png" alt="logo"></img>
        <a>Om</a>
      </nav>
      <FirstItem />
      <SecondItem />
    </main>
  );
};

export default Home;




export async function getStaticProps() {
  const content = await fetchFromCMS('anis');
  return {
    props: { content },
    revalidate: 1,
  };
}