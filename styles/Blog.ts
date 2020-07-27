import styled from 'styled-components'
import { props } from '../types/props'

export const BlogListWrapper = styled.div.attrs({
  className: `flex flex-wrap`,
})

export const BlogContainer = styled.div.attrs({
  className: 'w-full w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 m-2 overflow-hidden rounded border shadow m-1 p-2',
})`
  background: ${({ theme }: props) => theme.bg};
`

export const BlogTitle = styled.div.attrs({
  className: `mr-10 text-2xl truncate-2nd font-bold`,
})`
  color: ${({ theme }: props) => theme.text};
`

export const BlogDescription = styled.div.attrs({
  className: `text-lg text-gray-600`,
})``

export const BlogBottomContainer = styled.div.attrs({
  className: `flex justify-between text-md text-gray-600`,
})``

export const BlogEmptyContainer = styled.div.attrs({
  className: `w-full max-w-sm overflow-hidden rounded border bg-white shadow m-2`,
})``

export const BlogEmptyText = styled.div.attrs({
  className: `m-2 text-md truncate-2nd font-bold text-center`,
})``
