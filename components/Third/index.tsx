import React from 'react';
import Callout from '@components/callout';
import Border from 'constants/border';
import {RichText} from 'prismic-reactjs';

type Props = {
  content: any;
};
const ThridView = ({content}: Props) => {
  return (
    <div className="third-view">
      <Border color={'#f1d02c'} />
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
};

export default ThridView;
