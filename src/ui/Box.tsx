import React from 'react';
import styled from 'styled-components';

interface IBox {
  className?: string;
  children?: React.ReactNode | string;
  flex?: boolean;
  column?: boolean | null;
  gap?: string;
  ai?: 'center' | 'flex-end' | 'flex-start';
}
const BoxComponent: React.FC<IBox> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const Box = styled(BoxComponent)`
  ${({ flex }) => flex && 'display: flex'};
  ${({ column }) => column && 'flex-direction: column'};
  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ ai }) => ai && `align-items: ${ai}`};
`;

export default Box;
