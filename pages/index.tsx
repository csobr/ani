import React, {useState, useRef, useEffect} from 'react';
import {GetServerSideProps} from 'next';

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

  useEffect(() => {
    open ? document.body.classList.add('overflow') : document.body.classList.remove('overflow');
    return () => {
      document.body.classList.remove('oveflow');
    };
  });

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
      <Spacer size={1} />
      <SecondItem content={content} /> <Spacer size={3} />
      <ThirdView content={content} /> <Spacer size={3} />
      <FourthView content={content} />
      <Spacer size={5} />
      <Highlight header={header} content={content} /> <Spacer size={10} />
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
