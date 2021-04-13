import React, {useEffect, useState, useRef} from 'react';
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
const SecondItem = ({content, getRef}: Props) => {
  const [getTheme, setTheme] = useState(undefined);
  const themeRef = useRef(getTheme);

  useEffect(() => {
    const themeColor = localStorage.getItem('theme');
    themeRef.current = getTheme;
  }, []);

  return (
    <div ref={getRef} className="second-view" data-scrollcolor="#eb483d">
      <div className="inner">
        <Border color={'#eb483d'} />
        <br />
        <h2>{RichText.asText(content.data.title)}</h2>
        <br />
        <div className="description">
          <p>{RichText.asText(content.data.content)}</p>

          <Image
            imageRef={themeRef}
            image={getTheme === 'dark' ? '/dopamin_light.webp' : '/dopamin_dark.webp'}
            alt={'dopamin'}
            size={340}
          />
        </div>
        <Spacer size={5} />
        <Poll a={'idag'} b={'ig'} c={'minns inte'} />
        <Spacer size={5} />
        <Callout
          text="Hjärnan förändras beroende på vad du tränar på."
          backgroundColor={'#f1d02c'}
          borderColor={'#000320'}
          textColor={'#000320'}
        />
      </div>
    </div>
  );
};

export default SecondItem;
