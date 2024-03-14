import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/hookRedux';
import { ReactComponent as Logo } from '../images/logo.svg';
import Realtor from './Realtor';

const HeaderStyle = styled.div`
  width: 100%;
  background-color: #85009e;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;
const LogoStyle = styled(Logo)`
  fill: #fff;
`;
const Header = () => {
  const realtor = useAppSelector((state) => state.preview.data?.realtor);
  return (
    <HeaderStyle>
      <LogoStyle />
      {realtor && <Realtor realtor={realtor} />}
    </HeaderStyle>
  );
};

export default Header;
