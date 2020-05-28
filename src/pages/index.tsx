import * as React from 'react';
import Link from 'next/link';

const Home: React.FC = ({}) => {
  return (
    <main className="main">
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>Lorem ipsum dolor sit amet</h1>
      <img></img>
    </main>
  );
};

export default Home;
