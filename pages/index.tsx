import * as React from 'react';
import Link from 'next/link';

const Home: React.FC = ({}) => {
  return (
    <main className="main">
      <nav>
        <Link href="/">
          <a>Om</a>
        </Link>
        <Link href="/">
          <a>Ordna</a>
        </Link>
      </nav>
      <div className="first-view">
        <div className="header">
          <h1>Lorem ipsum dolor sit amet feugiat tempor</h1>
        </div>
        <div className="first-img">
          <img className="pink" src="./images/inred.jpg" alt="pink"></img>
          <p className="title">Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet feugiat tempor, ipsum, facilisi aliquet.
            Tortor amet nulla semper enim, praesent sit tristique.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
