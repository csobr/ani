import React from 'react';
import {RichText} from 'prismic-reactjs';
import Border from '@components/Border';
import Callout from '@components/Callout';
import Image from '@components/Image';
import Poll from '@components/Poll';

type Props = {
  content: any;
  getRef: any;
};
const SecondItem = ({content, getRef}: Props) => {
  return (
    <div ref={getRef} className="second-view">
      <Border color={'#eb483d'} />
      <br />
      <h2>{RichText.asText(content.data.title)}</h2>
      <br></br>
      <div className="description">
        <p>{RichText.asText(content.data.content)}</p>
        <Image image={content.data.image.url} alt={content.data.image.alt} size={340} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <h3>När försökte du sist imponera på för dina kompisar?</h3>
      <br />
      <Poll a={'idag'} b={'ig'} c={'minns inte'} />
      <br />
      <br />
      <br />
      <br />
      <Callout
        text="Hjärnan förändras beroende på vad du tränar på."
        backgroundColor={'#f1d02c'}
        borderColor={'#000320'}
        textColor={'#000320'}
      />
    </div>
  );
};

export default SecondItem;
