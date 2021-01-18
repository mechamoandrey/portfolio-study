import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

const wrapperModifiers = {
  small: () => css`
    height: 3rem;
    font-size: ${theme.font.sizes.small};
  `,
  medium: () => css`
    height: 4rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: () => css`
    height: 5rem;
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `
}

export const Wrapper = styled.button`
  background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
  color: ${theme.colors.white};
  border: 0;
  border-radius: ${theme.border.radius};
  padding: ${theme.spacings.xxsmall};

  ${props => props.size ? wrapperModifiers[props.size] : wrapperModifiers['default']};
`