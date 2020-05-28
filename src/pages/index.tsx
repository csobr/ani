import * as React from 'react';
import Link from 'next/link';

const Home: React.FC = ({}) => {
  return (
    <main className="main">
      <Link href="/">
        <a>Om</a>
      </Link>
      <Link href="/">
        <a>Ordna</a>
      </Link>
      <h1>Lorem ipsum dolor sit amet</h1>
      <img src="./images/inred.jpg"></img>
    </main>
  );
};

export default Home;
