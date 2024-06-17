import React, { useState } from 'react';
import styled from 'styled-components';
import DialogWindow from './DialogWindow';
import Text from '../ui/Text';

interface IBuildingPhotos {
  pictures: string[];
}
const ObjectPhotosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
const BuildingPhotos: React.FC<IBuildingPhotos> = ({ pictures }) => {
  const [openPhoto, setOpenPhoto] = useState<string>('');
  const openWindowPhoto = (src: string) => {
    setOpenPhoto(src);
  };
  const closeWindowPhoto = () => {
    setOpenPhoto('');
  };
  return (
    <>
      <Text color='#85009e' size={16} bold>
        Фотографии комплекса:
      </Text>
      <ObjectPhotosContainer>
        {pictures.map((photo, idx) => {
          return (
            <ImagePhoto
              src={photo}
              key={idx}
              onClick={() => {
                openWindowPhoto(photo);
              }}
            />
          );
        })}
      </ObjectPhotosContainer>
      <DialogWindow open={Boolean(openPhoto)} onClose={closeWindowPhoto}>
        <img style={{ maxHeight: '80vh', maxWidth: '90vw' }} src={openPhoto} />
      </DialogWindow>
    </>
  );
};

export default BuildingPhotos;
