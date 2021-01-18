import React from 'react'
import * as S from './styles'

const Button = ({children, size = 'medium' }) => (
  <S.Wrapper size={size}> 
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)


export default Button