import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.header`
  display: flex;
  align-items: center;

  .logo{
    margin-right: ${theme.spacings.giga};
  }

  .job-position{
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
    font-weight: 700;
    text-transform: uppercase;
    margin-right: ${theme.spacings.giga};
  }

  .link{
    color: ${theme.colors.black};
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    &:not(:last-child){
      margin-right: 4rem;
      &:after{
        content: '/';
        color: ${theme.colors.gray};
        margin-left: 4rem
      }
    }
  }
` 