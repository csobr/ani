import React, {useState, useRef, useEffect} from 'react';
import Head from 'next/head';
import {GetServerSideProps} from 'next';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

import {Client} from '../prismic-configuration';
import PlausibleProvider from 'next-plausible';
import ClickOutsideRef from '../Hooks/ClickedOutside';

import FirstItem from '@components/First';
import SecondView from '@components/Second/index';
import ThirdView from '@components/Third';
import FourthView from '@components/Fourth/index';
import Highlight from '@components/Callout/Highlight';
import Footer from '@components/Footer/Footer';
import SideMenu from '@components/SideMenu/SideMenu';
import Spacer from '@components/Spacer/Spacer';
import DarkModeToggle from '@components/Toggle/DarkModeToggle';
import {COLORS} from 'constants/Colors';

type Props = {
  kompisar: any;
  kanslor: any;
  beloning: any;
  somn: any;
  dataset: HTMLElement;
};

const Home = ({kompisar, kanslor, beloning, somn}: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
    const partOne = partOneRef.current;
    const partTwo = partTwoRef.current;
    const partThree = partThreeRef.current;
    const partFour = partFourRef.current;

    ScrollTrigger.matchMedia({
      '(max-width: 480px)': function () {
        gsap.fromTo(
          partOne,
          {autoAlpha: 0, yPercent: 0},
          {
            autoAlpha: 1,
            yPercent: -2,
            scrollTrigger: {
              trigger: partOne,
              start: 'top center',
              end: 'center bottom',
            },
          }
        );
        tl.fromTo(partTwo, {autoAlpha: 0, yPercent: 0}, {autoAlpha: 1, yPercent: -5})
          .fromTo(partThree, {autoAlpha: 0, yPercent: 0}, {autoAlpha: 1, yPercent: -10})
          .fromTo(partFour, {autoAlpha: 0, yPercent: 0}, {autoAlpha: 1, yPercent: -10});
      },
      '(min-width: 480px)': function () {
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
      },
    });

    gsap.set(backgroundColorRef.current, {borderColor: COLORS.background.light});

    const scrollColorElement = document.querySelectorAll('[data-scrollcolor]');
    const scrollColorDiv = scrollColorElement instanceof HTMLDivElement;
    scrollColorElement.forEach((colorSection, i) => {
      const previousColor =
        i === 0 ? COLORS.background.light : scrollColorDiv && scrollColorDiv[i - 1].dataset.scrollcolor;
      ScrollTrigger.create({
        trigger: colorSection,
        start: 'center bottom',
        onEnter: () =>
          gsap.to('main', {
            borderColor: (colorSection as HTMLElement).dataset.scrollcolor,
            overwrite: 'auto',
            autoAlpha: 1,
          }),
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
    <PlausibleProvider domain="ani-brain.com">
      <Head>
        <title>Ani - Min tonårshjärna</title>
      </Head>
      <main className="main" ref={backgroundColorRef}>
        <nav>
          <p className="logo">ani</p>
          <div className="nav-align-left">
            <DarkModeToggle />
            <button onClick={() => setOpen(!open)}>Om</button>
            {open && <section ref={ref} className="overlay" />}
          </div>
        </nav>

        <SideMenu open={open} closed={() => setOpen(!open)} />
        <Spacer size={1} />
        <FirstItem />
        <Spacer size={5} />
        <SecondView getRef={partOneRef} content={kompisar} />
        <Spacer size={10} />
        <ThirdView getRef={partTwoRef} content={beloning} />
        <Spacer size={5} />
        <FourthView getRef={partThreeRef} content={kanslor} />
        <Spacer size={5} />
        <Highlight getRef={partFourRef} content={somn} />
        <Footer />
      </main>
    </PlausibleProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const client = Client();
  const kompisar = await client.getByUID('page', 'kompisar', undefined).catch((error) => {
    console.log('failed to load content', error);
  });
  const beloning = await client.getByUID('page', 'beloning', undefined).catch((error) => {
    console.log('failed to load content', error);
  });
  const kanslor = await client.getByUID('page', 'kanslor', undefined).catch((error) => {
    console.log('failed to load content', error);
  });
  const somn = await client.getByUID('page', 'somn', undefined).catch((error) => {
    console.log('failed to load content', error);
  });
  return {props: {kanslor, beloning, kompisar, somn}};
};
export default Home;
