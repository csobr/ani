import React, {useState, useRef, useEffect} from 'react';
import {GetServerSideProps} from 'next';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

import {Client} from '../prismic-configuration';
import ClickOutsideRef from '../hooks/ClickedOutside';

import FirstItem from '@components/First';
import SecondItem from '@components/Second/index';
import ThirdView from '@components/Third';
import FourthView from '@components/Fourth/index';
import Highlight from '@components/Highlight';
import Footer from '@components/Footer';
import SideMenu from '@components/SideMenu';
import Spacer from '@components/Spacer';
import DarkModeToggle from '@components/DarkModeToggle';

type Props = {
  content: any;
};

const Home = ({content}: Props) => {
  const header = 'Sömn';
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  ClickOutsideRef(ref, () => setOpen(false));
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    open ? document.body.classList.add('overflow') : document.body.classList.remove('overflow');
    return () => {
      document.body.classList.remove('oveflow');
    };
  });

  const partOneRef = useRef(null);
  const partTwoRef = useRef(null);
  const partThreeRef = useRef(null);
  const partFourRef = useRef(null);
  const backgroundColorRef = useRef(null);

  const tl = gsap.timeline({defaults: {ease: 'none'}});
  gsap.defaults({ease: 'none'});

  useEffect(() => {
    if (!process.browser) return;

    const partOne = partOneRef.current;
    const partTwo = partTwoRef.current;
    const partThree = partThreeRef.current;
    const partFour = partFourRef.current;

    gsap.fromTo(
      partOne,
      {autoAlpha: 0, yPercent: 0},
      {
        autoAlpha: 1,
        yPercent: -10,
        scrollTrigger: {
          trigger: partOne,
          start: 'top center',
          end: 'center bottom',
        },
      }
    );
    tl.fromTo(partTwo, {autoAlpha: 0, yPercent: 0}, {autoAlpha: 1, yPercent: -30})
      .fromTo(partThree, {autoAlpha: 0, yPercent: 0}, {autoAlpha: 1, yPercent: -30})
      .fromTo(partFour, {autoAlpha: 0, yPercent: 0}, {autoAlpha: 1, yPercent: -30});

    gsap.set(backgroundColorRef.current, {borderColor: '#000320'});

    const scrollColorElement = document.querySelectorAll('[data-scrollcolor]');
    scrollColorElement.forEach((colorSection, i) => {
      const previousColor = i === 0 ? '#000320' : scrollColorElement[i - 1].dataset.scrollcolor;
      ScrollTrigger.create({
        trigger: colorSection,
        start: 'center bottom',
        onEnter: () =>
          gsap.to('main', {borderColor: colorSection.dataset.scrollcolor, overwrite: 'auto', autoAlpha: 1}),
        onLeaveBack: () => gsap.to('main', {borderColor: previousColor, overwrite: 'auto'}),
      });
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: partTwo,
      scrub: 1,
      once: true,
    });
  }, []);

  return (
    <main className="main" ref={backgroundColorRef}>
      <nav>
        <p className="logo">ani</p>
        <div className="nav-align-left">
          <DarkModeToggle />
          <a onClick={() => setOpen(!open)}>Om</a>
          {open && <section ref={ref} className="overlay" />}
        </div>
      </nav>{' '}
      <SideMenu open={open} closed={() => setOpen(!open)} />
      <Spacer size={1} />
      <FirstItem content={content} />
      <Spacer size={5} />
      <SecondItem getRef={partOneRef} content={content} />
      <Spacer size={5} />
      <ThirdView getRef={partTwoRef} content={content} />
      <Spacer size={5} />
      <FourthView getRef={partThreeRef} content={content} />
      <Spacer size={5} />
      <Highlight getRef={partFourRef} header={header} content={content} />
      <Footer />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const client = Client();
  const content = await client.getSingle('page');

  return {props: {content}};
};
export default Home;
