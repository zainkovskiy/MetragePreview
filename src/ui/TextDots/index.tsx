import React from 'react';
import * as S from './style';
import { ITextDots } from './type';

const TextDots: React.FC<ITextDots> = ({ title, value }) => {
  return (
    <S.TextDots>
      <S.DotsValue>{value}</S.DotsValue>
      <S.DotsTitle>{title}</S.DotsTitle>
    </S.TextDots>
  );
};

export default TextDots;
