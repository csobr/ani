import {RichText} from 'prismic-reactjs';
import React from 'react';

type Props = {
  content: string;
  header: string;
};
const Highlight = ({content, header}: Props) => (
  <div className="highlight">
    <h4>{header}</h4>
    <br />
    <p>{RichText.asText(content.data.content)}</p>
  </div>
);
export default Highlight;
