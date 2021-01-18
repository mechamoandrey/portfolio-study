import React from 'react'
import * as S from './styles'

const Logo = ({color = 'orange', size = 'normal'}) => (
  <S.Wrapper className='logo' color={color} size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="5 7 22.5 19"
      role="img"
      aria-label="Miniatura de um terminal"
    >
    <path
      fill={color}
      d="M25.716 6.696H6.42c-.888 0-1.608.72-1.608 1.608v16.08c0 .888.72 1.608 1.608 1.608h19.296c.888 0 1.608-.72 1.608-1.608V8.304c0-.888-.72-1.608-1.608-1.608zM8.028 17.952l3.216-3.216-3.216-3.216 1.608-1.608 4.824 4.824-4.824 4.824-1.608-1.608zm12.864 1.608H14.46v-1.608h6.432v1.608z"
    />
    </svg>
  </S.Wrapper>  
)

export default Logo