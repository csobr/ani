import React from 'react';
import FirstItem from '@components/First';
import SecondItem from '@components/Second';

import {Client} from '../prismic-configuration';
import {GetServerSideProps} from 'next';
import ThridView from '@components/Third';

type Props = {
  content: any;
};
const Home = ({content}: Props) => {
  return (
    <main className="main">
      <nav>
        <img src="logo.png" alt="logo"></img>
        <a>Om</a>
      </nav>
      <FirstItem content={content} />
      <SecondItem content={content} />
      <ThridView content={content} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const client = Client();
  const content = await client.getSingle('page');

  return {props: {content}};
};
export default Home;
