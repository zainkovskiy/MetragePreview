import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/hookRedux';
import { getPreviewList } from '../store/previewSlice';
import Text from '../ui/Text';
import { ReactComponent as Undergroud } from '../images/underground.svg';
import Box from '../ui/Box';
import MapComponent from './MapComponent';
import ObjectPhotos from './ObjectPhotos';
import Description from './Description';
import BuildingPhotos from './BuildingPhotos';

const StartPageStyle = styled.div`
  flex-grow: 1;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
`;
const Header = styled.div`
  border-bottom: 1px solid #85009e;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const iconCss = css`
  width: 40px;
  height: 48px;
`;
const UndergroudIcon = styled(Undergroud)`
  ${iconCss}
  fill: #84019e;
`;
const Container = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 400px min-content;
  }
`;
const Line = styled.div`
  min-height: 1px;
  width: 100%;
  background-color: #85009e;
`;
const StartPage = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.preview.data);

  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    dispatch(getPreviewList());
  };
  return (
    <StartPageStyle>
      <Header>
        <Box flex column>
          <Text color='#85009e' size={16} bold>
            {data?.addressInfo?.buildingName}
          </Text>
          <Text color='#85009e' size={12}>
            {data?.addressInfo?.addressString}
          </Text>
        </Box>
        <Box flex gap='0.5rem' ai='center'>
          <UndergroudIcon />
          <Box flex column={data?.main?.metro && data?.main?.metro?.length > 1}>
            <Text bold size={12}>
              метро:
            </Text>
            {data?.main?.metro &&
              data?.main?.metro.map((item, idx) => (
                <Box flex gap='0.3rem' key={idx}>
                  <Text size={12}>{item.name}</Text>
                  {item?.distantion && (
                    <Text size={12}>({item.distantion})</Text>
                  )}
                </Box>
              ))}
          </Box>
        </Box>
      </Header>
      <Container>
        <MapComponent cords={data?.main?.cords || []} />
        <Description description={data?.Description || ''} />
      </Container>
      <Line />
      {data?.pictures.map((pictures, idx) => (
        <ObjectPhotos pictures={pictures} key={idx} />
      ))}
      <BuildingPhotos pictures={data?.main?.pictures || []} />
    </StartPageStyle>
  );
};

export default StartPage;
