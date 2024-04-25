import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/hookRedux';
import { getPreviewList } from '../store/previewSlice';
import Text from '../ui/Text';
import { ReactComponent as Undergroud } from '../images/underground.svg';
import { ReactComponent as Building } from '../images/building.svg';
import Box from '../ui/Box';
import MapComponent from './MapComponent';
import ObjectPhotos from './ObjectPhotos';
import TableLive from './TableLive';
import TableBusiness from './TableBusiness';

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
`;
const ClassWrap = styled.div`
  display: flex;
  align-items: center;
  background-color: #84019e;
  padding: 0 0.5rem;
  box-sizing: border-box;
`;
interface IImage {
  $gridWidth?: boolean;
}
const Image = styled.img<IImage>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${({ $gridWidth }) => $gridWidth && 'grid-column-start: 1'};
  ${({ $gridWidth }) => $gridWidth && 'grid-column-end: 3'};
`;
const iconCss = css`
  width: 40px;
  height: 48px;
`;
const UndergroudIcon = styled(Undergroud)`
  ${iconCss}
  fill: #84019e;
`;
const BuildingIcon = styled(Building)`
  ${iconCss}
  stroke: #84019e;
  fill: #fff;
`;
const FeatureWrap = styled.div`
  display: grid;
  gap: 1rem;
  /* grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); */
  grid-template-columns: 1fr 1fr;
`;
const Container = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  height: 400px;
`;
const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60% calc(50% - 0.5rem - 10%);
  gap: 0.5rem;
  height: 400px;
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
  const getComma = (idx: number) => {
    const infrastructureLength =
      data?.main?.building?.infrastructure?.length || 0;
    if (infrastructureLength - 1 > idx) {
      return ',';
    }
    return '';
  };
  const classTranslate = (type: string) => {
    switch (type) {
      case 'a':
        return 'Класс A';
      case 'aPlus':
        return 'Класс A+';
      case 'b':
        return 'Класс B';
      case 'bPlus':
        return 'Класс B+';
      case 'bMinus':
        return 'Класс B-';
      case 'c':
        return 'Класс C';
      default:
        '';
    }
  };
  const getTableComponent = () => {
    switch (data?.mode) {
      case 'live':
        return TableLive;
      default:
        return TableBusiness;
    }
  };
  const TableComponent = getTableComponent();
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
        {data?.main?.building?.ClassType && (
          <ClassWrap>
            <Text color='#fff'>
              {classTranslate(data?.main?.building?.ClassType)}
            </Text>
          </ClassWrap>
        )}
      </Header>
      <FeatureWrap>
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
        <Box flex gap='0.5rem' ai='center'>
          <BuildingIcon />
          <Box flex column>
            <Box flex gap='0.3rem'>
              <Text bold size={12}>
                общая площадь:
              </Text>
              <Text size={12}>{`${
                data?.main?.building?.totalarea || ''
              } м. кв.`}</Text>
            </Box>
            <Box flex gap='0.3rem'>
              <Text bold size={12}>
                этажность:
              </Text>
              <Text size={12}>{data?.main?.building?.floors || ''}</Text>
            </Box>
            <Box flex gap='0.3rem'>
              <Text bold size={12}>
                инфраструктура:
              </Text>
              {data?.main?.building?.infrastructure.map((item, idx) => (
                <Text size={12} key={item}>
                  {item}
                  {getComma(idx)}
                </Text>
              ))}
            </Box>
          </Box>
        </Box>
      </FeatureWrap>
      <Container
        style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr' }}
      >
        <MapComponent cords={data?.main?.cords || []} />
        <ImageContainer>
          {data?.main?.pictures.map((photo, idx) => (
            <Image $gridWidth={idx === 0} src={photo} key={photo} />
          ))}
        </ImageContainer>
      </Container>
      <TableComponent objects={data?.objects || []} />
      {data?.pictures.map((pictures, idx) => (
        <ObjectPhotos pictures={pictures} key={idx} />
      ))}
    </StartPageStyle>
  );
};

export default StartPage;
