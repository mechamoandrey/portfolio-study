import React from 'react'
import * as S from './styles'
import Logo from '../Logo/index'

import { Infos } from '../../data/infos'


const Header = () => (
  <S.Wrapper>
    <Logo color='black' size='normal'/>
    <h2 className='job-position'>Front-end <br/> Developer</h2>
    <a className="link" href="/" target="_blank">{Infos.number}</a> 
    <a className="link" href="/" target="_blank">{Infos.email}</a> 
  </S.Wrapper>
)

export default Header