import React, { useState } from 'react';
import { IPictures } from '../types/ApiType';
import Text from '../ui/Text';
import Box from '../ui/Box';
import styled from 'styled-components';
import DialogWindow from './DialogWindow';
import Characteristics from './Characteristics';

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
const MobileImagePhoto = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s;
  @media (min-width: 769px) {
    display: none;
  }
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
      <Characteristics openWindowPhoto={openWindowPhoto} />
      <ObjectPhotosContainer>
        {pictures.photo.map((photo, idx) => {
          if (idx === 0) {
            return (
              <MobileImagePhoto
                src={photo}
                key={idx}
                onClick={() => {
                  openWindowPhoto(photo);
                }}
              />
            );
          }

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

export default ObjectPhotos;
