import React from 'react';
import Border from '@components/Border/Border';
import Image from '@components/Image/Image';
import {RichText} from 'prismic-reactjs';
import Callout from '@components/Callout/Callout';

type Props = {
  content: any;
  getRef: any;
};

const FourthView = ({content, getRef}: Props) => {
  const data = content?.data;
  return (
    <div className="fourth-view " data-scrollcolor="#e88fa3">
      <div ref={getRef} className="inner">
        <Border color={'#e88fa3'} />
        <br />
        {data?.title && <h2>{RichText.asText(data.title)}</h2>}
        <br />
        <div className="description">
          {data?.content && <p>{RichText.asText(data.content)}</p>}
          <Image image={'/brain_red.png'} alt={'brain'} size={300} />
        </div>
        <br />
        <br />
        {data?.body?.[0]?.primary?.title && (
          <Callout
            text={RichText.asText(data.body[0].primary.title)}
            backgroundColor={'#000000'}
            borderColor={'#f1d02c'}
            textColor={'#f1d02c'}
          />
        )}
      </div>
    </div>
  );
};
export default FourthView;
