import React, {useContext} from 'react';
import {RichText} from 'prismic-reactjs';

import Image from 'components/Image/Image';
import Border from '@components/Border/Border';
import {ThemeContext} from '../Theme/ThemeContext';

type Props = {
  content: any;
  getRef: any;
};
const ThridView = ({content, getRef}: Props) => {
  const {themeMode} = useContext(ThemeContext);
  return (
    <div className="third-view" data-scrollcolor="#f1d02c">
      <div ref={getRef} className="inner">
        <Border color={'#f1d02c'} />
        <br />
        <div>
          <h2>{RichText.asText(content.data.title)}</h2>
          <br />

          <div className="description">
            <p>{RichText.asText(content.data.content)}</p>
            <Image
              image={themeMode === 'dark' ? 'dopamin_light.png' : '/dopamin_dark.png'}
              alt={'dopamin'}
              size={340}
            />
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
