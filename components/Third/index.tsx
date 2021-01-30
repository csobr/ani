import React from 'react';
import Callout from '@components/callout';
import Image from '../image';
import Border from 'constants/border';
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
        <h2>{RichText.asText(content.data.h2)}</h2>
        <br></br>
        <div className="description">
          <p>{RichText.asText(content.data.content)}</p>
        </div>
      </div>
      <br />
      <br />
      <h3>När försökte du sist imponera på för dina kompisar?</h3>
      <br />
      <form>
        <label className="checkbox" htmlFor="idag">
          <input type="checkbox" name="Idag" />
          <svg width="35" height="35" viewBox="-4 -4 39 39" aria-hidden="true" focusable="false">
            <rect
              className="cb-bg"
              width="35"
              height="35"
              x="-2"
              y="-2"
              stroke="currentColor"
              fill="none"
              strokeWidth="5"></rect>

            <polyline
              className="cb-cm"
              points="4,14 12,23 28,5"
              stroke="transparent"
              strokeWidth="4"
              fill="none"></polyline>
          </svg>
          <span>Idag</span>
        </label>

        <label className="checkbox" htmlFor="igår">
          <input type="checkbox" name="Igår" />
          <svg width="35" height="35" viewBox="-4 -4 39 39" aria-hidden="true" focusable="false">
            <rect
              className="cb-bg"
              width="35"
              height="35"
              x="-2"
              y="-2"
              stroke="currentColor"
              fill="none"
              strokeWidth="5"></rect>

            <polyline
              className="cb-cm"
              points="4,14 12,23 28,5"
              stroke="transparent"
              strokeWidth="4"
              fill="none"></polyline>
          </svg>
          <span>Igår</span>
        </label>

        <label className="checkbox" htmlFor="igår">
          <input type="checkbox" name="Minns inte" />
          <svg width="35" height="35" viewBox="-4 -4 39 39" aria-hidden="true" focusable="false">
            <rect
              className="cb-bg"
              width="35"
              height="35"
              x="-2"
              y="-2"
              stroke="currentColor"
              fill="none"
              strokeWidth="5"></rect>

            <polyline
              className="cb-cm"
              points="4,14 12,23 28,5"
              stroke="transparent"
              strokeWidth="4"
              fill="none"></polyline>
          </svg>
          <span>Minns inte</span>
        </label>
      </form>
      <br />
      <br />
      <Callout
        text="Hjärnan förändras beroende på vad du tränar på."
        backgroundColor={'#000000'}
        borderColor={'#f1d02c'}
        textColor={'#f1d02c'}
      />
      <br />
      <Image image={'/brain.webp'} alt={'dopamin'} size={340} />
    </div>
  );
};

export default ThridView;
