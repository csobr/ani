import React from 'react';
import FirstItem from '@components/First';
import SecondItem from '@components/Second';
import fetchFromCMS from 'lib/service';
import { GetStaticProps, GetStaticPropsContext } from 'next'

type Props = {
  content: any
}
const Home = ({ content }: Props) => {
  return (
    <main className="main">
      <nav>
        <img src="logo.png" alt="logo"></img>
        <a>Om</a>
      </nav>
      <FirstItem content={content} />
      <SecondItem />
    </main>
  );
};

export default Home;




export const getStaticProps: GetStaticProps = async () => {
  const content = await fetchFromCMS('anis');
  return {
    props: { content },
    revalidate: 1,
  };
}