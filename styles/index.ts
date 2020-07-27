import styled, { createGlobalStyle } from 'styled-components'
import { props } from '../types/props'

export const Paragraph = styled.p.attrs({
  className: 'text-lg m-2',
})``

export const Title = styled.div.attrs({
  className: 'text-3xl m-4 font-bold',
})``

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: props) => theme.bg};
    color: ${({ theme }: props) => theme.text};
    transition: all 0.50s linear;
  }
`

export * from './Theme'
export * from './Blog'
