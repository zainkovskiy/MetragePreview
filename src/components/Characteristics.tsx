import React from 'react';
import { useAppSelector } from '../hooks/hookRedux';
import styled from 'styled-components';
import Text from '../ui/Text';
import TextDots from '../ui/TextDots';
interface ICharacteristics {
  openWindowPhoto: (photo: string) => void;
}
const CharacteristicsStyle = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
  }
`;
const DesktopImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
    display: none;
  }
`;
const CharacteristicsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const CharacteristicsWrapper = styled.div`
  overflow: auto;
`;

const Characteristics: React.FC<ICharacteristics> = ({ openWindowPhoto }) => {
  const data = useAppSelector((state) => state.preview.data);
  return (
    <CharacteristicsStyle>
      <DesktopImage
        src={data?.pictures[0].photo[0] || ''}
        onClick={() => {
          openWindowPhoto(data?.pictures[0].photo[0] || '');
        }}
      />
      <CharacteristicsBlock>
        <Text color='#85009e' size={16} bold>
          Характиристики
        </Text>
        <CharacteristicsWrapper>
          {data?.tableDriver.map((item) => (
            <TextDots
              key={item.keyTitle}
              value={data.objectParams[item.keyName]}
              title={item.keyTitle}
            />
          ))}
        </CharacteristicsWrapper>
      </CharacteristicsBlock>
    </CharacteristicsStyle>
  );
};

export default Characteristics;
