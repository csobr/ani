import {RichText} from 'prismic-reactjs';
import React from 'react';

type Props = {
  content: any;
  getRef: any;
};
const Highlight = ({content, getRef}: Props) => {
  const data = content?.data;
  return (
    <div ref={getRef} className="highlight" data-scrollcolor="#000320">
      <div className="star-container">
        <div className="star" />
      </div>
      {data?.title && <h3>{RichText.asText(data.title)}</h3>}
      <br />
      {data?.content && <p>{RichText.asText(data.content)}</p>}
      <div className="star-container">
        <div className="star" />
      </div>
      <div className="star" />
    </div>
  );
};
export default Highlight;
