import React from 'react';
import Border from '@components/Border';
import {RichText} from 'prismic-reactjs';

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
