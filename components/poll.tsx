import React from 'react';

type PollOptions = {
  a: string;
  b: string;
  c: string;
};

const Poll = ({a, b, c}: PollOptions) => (
  <form>
    <label className="checkbox" htmlFor={a}>
      <input type="checkbox" name={a} />
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
      <span>{a}</span>
    </label>

    <label className="checkbox" htmlFor={a}>
      <input type="checkbox" name={b} />
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
      <span>{b}</span>
    </label>

    <label className="checkbox" htmlFor={c}>
      <input type="checkbox" name={c} />
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
      <span>{c}</span>
    </label>
  </form>
);

export default Poll;
