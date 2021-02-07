import React from 'react';
import {RichText} from 'prismic-reactjs';
import Border from '../../constants/border';
import Callout from '@components/callout';
import Image from '../image';
import Poll from '@components/poll';

type Props = {
  content: any;
};
const SecondItem = ({content}: Props) => {
  return (
    <div className="second-view">
      <Border color={'#eb483d'} />
      <br />
      <div>
        <h2>{RichText.asText(content.data.h2)}</h2>
        <br></br>
        <div className="description">
          <p>{RichText.asText(content.data.content)}</p>
        </div>
      </div>
      <br />
      <br />
      <h3>När försökte du sist imponera på för dina kompisar?</h3>
      <br />
      <Poll a={'idag'} b={'ig'} c={'minns inte'} />
      <br />
      <br />
      <Callout
        text="Hjärnan förändras beroende på vad du tränar på."
        backgroundColor={'#f1d02c'}
        borderColor={'#000000'}
        textColor={'#000000'}
      />
      <Image image={'/dopamin.webp'} alt={'dopamin'} size={340} />
    </div>
  );
};

export default SecondItem;
