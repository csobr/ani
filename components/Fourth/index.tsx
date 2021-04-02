import React from 'react';
import Border from '@components/Border';
import Image from '@components/Image';
import {RichText} from 'prismic-reactjs';
import Callout from '@components/Callout';

type Props = {
  content: string;
  getRef: any;
};

const FourthView = ({content, getRef}: Props) => (
  <div className="fourth-view " data-scrollcolor="#e88fa3">
    <div ref={getRef} className="inner">
      <Border color={'#e88fa3'} />
      <br />
      <h2>{RichText.asText(content.data.title)}</h2>
      <br />
      <div className="description">
        <p>{RichText.asText(content.data.content)}</p>
        <Image image={'/brain.webp'} alt={'brain'} size={340} />
      </div>
      <br />
      <br />
      <Callout
        text="Hjärnan förändras beroende på vad du tränar på."
        backgroundColor={'#000320'}
        borderColor={'#f1d02c'}
        textColor={'#f1d02c'}
      />
    </div>
  </div>
);
export default FourthView;
