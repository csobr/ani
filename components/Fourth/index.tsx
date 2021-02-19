import React from 'react';
import Border from 'constants/border';
import Image from '../image';
import {RichText} from 'prismic-reactjs';
import Callout from '@components/callout';

type Props = {
  content: string;
};

const FourthView = ({content}) => (
  <div className="fourth-view">
    <Border color={'#40a857'} />
    <br />
    <>
      <h2>{RichText.asText(content.data.title)}</h2>
      <br />
      <div className="description">
        <p>{RichText.asText(content.data.content)}</p>
        <Image image={'/brain.webp'} alt={'dopamin'} size={340} />
      </div>
    </>
    <br />
    <br />
    <Callout
      text="Hjärnan förändras beroende på vad du tränar på."
      backgroundColor={'#000000'}
      borderColor={'#f1d02c'}
      textColor={'#f1d02c'}
    />
    <br />
  </div>
);
export default FourthView;
