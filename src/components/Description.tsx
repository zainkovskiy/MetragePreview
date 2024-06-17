import React from 'react';
import Text from '../ui/Text';
import styled from 'styled-components';

interface IDescription {
  description: string;
}

const DescriptionStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const DescriptionWrapper = styled.div`
  overflow: auto;
`;

const Description: React.FC<IDescription> = ({ description }) => {
  return (
    <DescriptionStyle>
      <Text color='#85009e' size={16} bold>
        Описание
      </Text>
      <DescriptionWrapper>
        <Text ws='pre-line' size={12}>
          {description}
        </Text>
      </DescriptionWrapper>
    </DescriptionStyle>
  );
};

export default Description;
