import React from 'react';
import * as S from './styles'

const Heading = ({ children, color = 'black', lineBottom = false, size = 'medium' }) => (
  <S.Wrapper 
    color={color}   
    lineBottom={lineBottom} 
    size={size}
  >
    {children}
  </S.Wrapper>
)

export default Heading