import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

const wrapperModifiers = {
  normal: () => css`
    width: 4.6rem;
  `,

  large: () => css`
    width: 20rem;
  `
}

export const Wrapper = styled.div`
  height: fit-content;
  color: ${props => props.color ? theme.colors[props.color] : props.color['default']};
  ${props => props.size ? wrapperModifiers[props.size] : wrapperModifiers['default']}; 
`