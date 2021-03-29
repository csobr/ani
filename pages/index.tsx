import React, {useEffect, useState, useRef} from 'react';
import FirstItem from '@components/First';
import SecondItem from '@components/Second';

import {Client} from '../prismic-configuration';
import {GetServerSideProps} from 'next';
import ThridView from '@components/Third';
import Highlight from '@components/highlight';
import FourthView from '@components/Fourth';
import Footer from '@components/footer';
import SideMenu from '@components/sideMenu';
import ClickOutsideRef from '../components/Hooks/ClickedOutside';
import Spacer from '@components/Spacer';

type Props = {
  content: any;
};
const Home = ({content}: Props) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  ClickOutsideRef(ref, () => setOpen(!open));
  const header = 'Sömn';
  return (
    <main className="main">
      <nav>
        <p className="logo">ani</p>
        <a onClick={() => setOpen(!open)}>Om</a>

        {open && <section ref={ref} className="overlay" />}
      </nav>

      <SideMenu open={open} closed={() => setOpen(!open)} />
      <FirstItem content={content} />
      <SecondItem content={content} />
      <ThridView content={content} />
      <FourthView content={content} />
      <Spacer size={10} />
      <Highlight header={header} content={content} />
      <Spacer size={15} />
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
