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

  const tl = gsap.timeline();
  gsap.defaults({ease: 'none'});
  useEffect(() => {
    if (!process.browser) return;

    const partOne = partOneRef.current;
    const partTwo = partTwoRef.current;
    const partThree = partThreeRef.current;
    const partFour = partFourRef.current;

    gsap.fromTo(
      partOne,
      {opacity: 0, yPercent: 0},
      {
        opacity: 1,
        yPercent: -10,
        scrollTrigger: {
          trigger: partOne,
          start: 'top center',
          end: 'center bottom',
          markers: true,
        },
      }
    );

    tl.fromTo(partTwo, {opacity: 0, yPercent: 0}, {opacity: 1, yPercent: -30})
      .fromTo(partThree, {opacity: 0, yPercent: 0}, {opacity: 1, yPercent: -30})
      .fromTo(partFour, {opacity: 0, yPercent: 0}, {opacity: 1, yPercent: -30});

    ScrollTrigger.create({
      animation: tl,
      trigger: partTwo,
      scrub: 1,
    });
  }, []);

  return (
    <main className="main">
      <nav>
        <p className="logo">ani</p>
        <a onClick={() => setOpen(!open)}>Om</a>
        {open && <section ref={ref} className="overlay" />}
      </nav>
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
      <Spacer size={5} />
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
