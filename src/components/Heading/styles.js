import styled, { css } from 'styled-components'
import theme from '../../styles/theme'
import media from 'styled-media-query'

const wrapperModifiers = {
  normal: () => css`
    font-size: ${theme.font.sizes.xlarge};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,
  large: () => css`
     ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxxlarge};
    `}
  `,

  lineBottom: () => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      border-bottom: 0.3rem solid ${theme.colors.primary};
      width: 5rem;
    }
  `
}

export const Wrapper = styled.h2`
  margin-bottom: ${theme.spacings.medium};

  color: ${props => props.color ? theme.colors[props.color] : props.color['default']};

  ${props => props.size ? wrapperModifiers[props.size] : wrapperModifiers['default']};

  ${props => props.lineBottom ? wrapperModifiers.lineBottom : wrapperModifiers['default']};
`
