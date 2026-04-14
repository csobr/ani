import React, {useContext} from 'react';
import {RichText} from 'prismic-reactjs';
import Border from '@components/Border/Border';
import Callout from '@components/Callout/Callout';
import Image from '@components/Image/Image';
import Poll from '@components/Poll/poll';
import Spacer from '@components/Spacer/Spacer';

type Props = {
  content: any;
  getRef: any;
};

const SecondView = ({content, getRef}: Props) => {
  const data = content?.data;
  return (
    <div ref={getRef} className="second-view" data-scrollcolor="#eb483d">
      <div className="inner">
        <Border color={'#eb483d'} />
        <br />
        {data?.title && <h2>{RichText.asText(data.title)}</h2>}
        <br />
        <div className="description">
          {data?.content && <p>{RichText.asText(data.content)}</p>}
          <Image image={'./brain.png'} alt={'brain'} size={340} />
        </div>
        <Spacer size={5} />
        <Poll />
        <Spacer size={5} />
        {data?.body?.[0]?.primary?.title && (
          <Callout
            text={RichText.asText(data.body[0].primary.title)}
            backgroundColor={'#f1d02c'}
            borderColor={'#000320'}
            textColor={'#000320'}
          />
        )}
      </div>
    </div>
  );
};

export default SecondView;
