import React from 'react';
import Border from '@components/border';
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
  );
};

export default ThridView;
