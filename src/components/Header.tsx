import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/hookRedux';
import logoUrl from '../images/logo.svg';
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

const Logo = styled.img`
  @media (max-width: 480px) {
    width: 25%;
  }
`;
const Header = () => {
  const realtor = useAppSelector((state) => state.preview.data?.realtor);
  return (
    <HeaderStyle>
      <Logo src={logoUrl} />
      {realtor && <Realtor realtor={realtor} />}
    </HeaderStyle>
  );
};

export default Header;
