import React from 'react';
import Border from 'constants/border';
import Image from '../image';
import {RichText} from 'prismic-reactjs';

type Props = {
  content: string;
};

const FourthView = ({content}) => (
  <div className="fourth-view">
    <Image image={'/brain.webp'} alt={'dopamin'} size={340} />

    <br />
    <br />
    <br />
    <br />
    <Border color={'#40a857'} />
    <br />

    <>
      <h2>{RichText.asText(content.data.title)}</h2>
      <br />
      <div className="description">
        <p>{RichText.asText(content.data.content)}</p>
      </div>
    </>
    <br />
    <br />
    <br />
  </div>
);
export default FourthView;
