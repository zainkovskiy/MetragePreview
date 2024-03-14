import React, { useState } from 'react';
import { IPictures } from '../types/ApiType';
import Text from '../ui/Text';
import Box from '../ui/Box';
import styled from 'styled-components';
import DialogWindow from './DialogWindow';

interface IObjectPhotos {
  pictures: IPictures;
}
const ImagePlan = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;
const ObjectPhotosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;
const ImagePhoto = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s;
  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(1);
    }
  }
`;
const ObjectPhotos: React.FC<IObjectPhotos> = ({ pictures }) => {
  const [openPhoto, setOpenPhoto] = useState<string>('');
  const openWindowPhoto = (src: string) => {
    setOpenPhoto(src);
  };
  const closeWindowPhoto = () => {
    setOpenPhoto('');
  };
  return (
    <>
      {pictures.plan.map((plan, idx) => (
        <React.Fragment key={idx}>
          <Text size={18} tAlign='center'>
            {plan.title}
          </Text>
          <ImagePlan src={plan.URL} />
        </React.Fragment>
      ))}
      <ObjectPhotosContainer>
        {pictures.photo.map((photo, idx) => (
          <ImagePhoto
            src={photo}
            key={idx}
            onClick={() => {
              openWindowPhoto(photo);
            }}
          />
        ))}
      </ObjectPhotosContainer>
      <DialogWindow open={Boolean(openPhoto)} onClose={closeWindowPhoto}>
        <img style={{ maxHeight: '80vh' }} src={openPhoto} />
      </DialogWindow>
    </>
  );
};

export default ObjectPhotos;
