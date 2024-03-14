import React from 'react';
import styled from 'styled-components';
import Text from '../ui/Text';
import Box from '../ui/Box';
import { IRealtor } from '../types/ApiType';

const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 40px;
  object-fit: cover;
  object-position: top;
`;
interface IRealtorComponent {
  realtor: IRealtor;
}

const Realtor: React.FC<IRealtorComponent> = ({ realtor }) => {
  return (
    <Box flex column gap='0.3rem'>
      <Text color='#fff'>Специалист по недвижимости</Text>
      <Box flex gap='0.3rem'>
        <Avatar src={realtor.avatar} />
        <Box flex column>
          <Text color='#ccc' size={12} bold>
            {realtor.fullName || 'Риелтор'}
          </Text>
          <Text color='#ccc' size={12}>
            {realtor.email || ''}
          </Text>
          <Text color='#ccc' size={12}>
            {realtor.phone || ''}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Realtor;
