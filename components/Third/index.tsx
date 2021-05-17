import React from 'react';
import {RichText} from 'prismic-reactjs';

import Image from 'components/Image/Image';
import Border from '@components/Border/Border';

type Props = {
  content: any;
  getRef: any;
};
const ThridView = ({content, getRef}: Props) => {
  return (
    <div className="third-view" data-scrollcolor="#f1d02c">
      <div ref={getRef} className="inner">
        <Border color={'#f1d02c'} />
        <br />
        <div>
          <h2>{RichText.asText(content.data.title)}</h2>
          <br></br>
          <div className="description">
            <p>{RichText.asText(content.data.content)}</p>
            <Image image={'/brain.png'} alt={'brain'} size={300} />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default ThridView;
