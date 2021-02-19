import {RichText} from 'prismic-reactjs';
import React from 'react';

type Props = {
  content: string;
  header: string;
};
const Highlight = ({content, header}: Props) => (
  <div className="highlight">
    <div className="star-container">
      <div className="star" />
    </div>
    <h4>{header}</h4>
    <br />
    <p>{RichText.asText(content.data.content)}</p>
    <div className="star-container">
      <div className="star" />
    </div>
    <div className="star" />
  </div>
);
export default Highlight;
