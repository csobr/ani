import React, {useEffect} from 'react';
import {TimelineLite, Power3} from 'gsap';

const Home: React.FC = ({}) => {
  const firstHeadline = React.useRef<HTMLDivElement>(null);
  const firstImg = React.useRef<HTMLDivElement>(null);

  let tl = new TimelineLite();
  useEffect(() => {
    tl.to(firstHeadline.current, 1, {
      opacity: 1,
      y: -50,
      ease: Power3.easeOut,
    });
    tl.to(firstImg.current, 1, {
      opacity: 1,
      y: -50,
      ease: Power3.easeOut,
    });
  });
  return (
    <main className="main">
      <nav>
        {/*         slide in view from right  */}
        <a>ani</a>
        <a>Om</a>
      </nav>
      <div className="first-view">
        <div
          className="headline"
          ref={(element) => {
            firstHeadline.current = element;
          }}>
          <h1>Lorem ipsum dolor sit amet feugiat tempor</h1>
        </div>
        <div
          className="first-img"
          ref={(element) => {
            firstImg.current = element;
          }}>
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
      <div className="headline-second">
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
      <div className="third-view">
        <div className="headline-third">
          <h3>Du</h3>
        </div>
      </div>
    </main>
  );
};

export default Home;
