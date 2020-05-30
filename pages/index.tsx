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
          <picture>
            <source className="pink" srcSet="./images/inred.jpg" type="image/jpeg" />
            <img className="pink" src="./images/inred.jpg" alt="pink" />
          </picture>

          <p className="title">Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet feugiat tempor, ipsum, facilisi aliquet.
            Tortor amet nulla semper enim, praesent sit tristique.
          </p>
        </div>
      </div>{' '}
      <div className="header-second">
        <h2>Vad säger forskningen?</h2>
      </div>
      <div className="second-view">
        <div className="second-left">
          <picture>
            <source srcSet="./images/brain.png" type="image/png" />
            <img src="./images/brain.png" alt="brain"></img>
          </picture>
          <p className="title-second">Det här händer i din hjärna.</p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet feugiat tempor, ipsum, facilisi aliquet.
              Tortor amet nulla semper enim, praesent sit tristique.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet feugiat tempor, ipsum, facilisi aliquet.
              Tortor amet nulla semper enim, praesent sit tristique.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet feugiat tempor, ipsum, facilisi aliquet.
              Tortor amet nulla semper enim, praesent sit tristique.
            </li>
          </ul>
          <p className="source">-Source</p>
        </div>

        <div className="second-right">
          <picture>
            <source srcSet="./images/yello.jpg" type="image/jpeg" />
            <img src="./images/yello.jpg" alt="swirl" />
          </picture>

          <p className="title-second">Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum at nunc cursus non. Tincidunt cras
            tellus enim feugiat mi enim aliquet integer. Dolor laoreet tincidunt quis sodales montes, vestibulum lorem
            turpis varius. Gravida rhoncus, lacus faucibus in amet, euismod.
            <br />
            <br />
            Vel neque dictum egestas amet. Enim quisque placerat commodo viverra. Ut at accumsan id lacus, diam. Quis
            congue adipiscing a arcu amet luctus. Enim maecenas dictum purus sit nam in urna eu. Scelerisque porttitor
            tellus libero facilisis. Bibendum nulla ornare cras blandit egestas.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
