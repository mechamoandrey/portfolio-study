import React from 'react';
import * as S from './styles'

const Heading = ({ children, color = 'white', lineBottom = false }) => (
  <S.Wrapper color={color} lineBottom={lineBottom} >
    {children}
  </S.Wrapper>
)

export default Heading