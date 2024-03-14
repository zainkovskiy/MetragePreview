import React from 'react';
import styled from 'styled-components';

interface IText {
  className?: string;
  children?: string | number | string[] | undefined | boolean | null;
  bold?: boolean;
  size?: number;
  color?: string;
  tAlign?: 'center' | 'end' | 'start';
}

const TextComponent: React.FC<IText> = (props) => {
  const { className, children } = props;
  return <span className={className}>{children}</span>;
};

const Text = styled(TextComponent)`
  font-family: ${({ bold }) => (bold ? 'MontBold' : 'MontLight')};
  font-size: ${({ size }) => (size ? `${size}px` : '14px')};
  color: ${({ color }) => (color ? color : '#000')};
  ${({ tAlign }) => tAlign && `text-align: ${tAlign}`};
`;

export default Text;
