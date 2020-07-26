import styled from 'styled-components'

export const Link = styled.a.attrs({})`
  color: ${({ theme }) => theme.link};
`

export const Paragraph = styled.p.attrs({
  className: 'text-lg m-2',
})``

export const Title = styled.div.attrs({
  className: 'text-3xl m-4',
})``
