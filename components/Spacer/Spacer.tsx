import React from 'react';
import styled from 'styled-components';

type Props = {
  size: number;
  axis: string;
};

const getHeight = ({axis, size}: Props) => (axis === 'horizontal' ? 1 : size);
const getWidth = ({axis, size}: Props) => (axis === 'vertical' ? 1 : size);

const Spacer = styled.span`
  display: block;
  width: ${getWidth}rem:
  min-width: ${getWidth}rem;
  height: ${getHeight}rem;
  min-height: ${getHeight}rem;
`;

export default Spacer;
