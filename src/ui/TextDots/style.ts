import styled, { css } from 'styled-components';

const textCss = css`
  font-family: MontLight, sans-serif;
  font-size: 12px;
`;

export const TextDots = styled.div`
  width: 100%;
  color: rgb(133, 0, 158);
`;
export const DotsTitle = styled.span`
  ${textCss};
  position: relative;
  display: block;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    margin-left: 0.3rem;
    bottom: 0.35em;
    width: 100%;
    border-bottom: 0.1em dotted;
  }
`;
export const DotsValue = styled.span`
  ${textCss};
  float: right;
  padding-left: 0.3rem;
`;
