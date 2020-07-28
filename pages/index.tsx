import React, { useEffect } from 'react'
import { Layout, Main, Header } from '../components'
import {
  Title,
  Paragraph,
  BlogContainer,
  BlogTitle,
  BlogDescription,
  BlogBottomContainer,
  BlogEmptyContainer,
  BlogEmptyText,
} from '../styles'
import { getBlogData, dayFromNow } from '../utils'
import { DataEntry } from '../types/data'

const EmptyBlog = ({}) => {
  return (
    <BlogEmptyContainer>
      <BlogEmptyText>No blog found</BlogEmptyText>
    </BlogEmptyContainer>
  )
}

const BlogItem = ({ item }: { item: DataEntry }) => {
  const { author, description, title, timestamp } = item
  return (
    <BlogContainer>
      <BlogTitle>{title}</BlogTitle>
      <BlogDescription>{description}</BlogDescription>
      <BlogBottomContainer>
        <span>{author}</span>
        <span>{dayFromNow(timestamp)}</span>
      </BlogBottomContainer>
    </BlogContainer>
  )
}

const BlogList = ({ items }: { items: DataEntry }) => {
  return (
    <div className="flex flex-wrap mx-auto">
      {items.map((item: DataEntry, key: number) => (
        <BlogItem key={key} item={item} />
      ))}
    </div>
  )
}
const Blog = ({ blogs }: { blogs: DataEntry }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/sw.js')
          .then((_) => {
            console.log('service worker registration successful')
          })
          .catch((err) => {
            console.warn('service worker registration failed', err.message)
          })
      }
    }
  }, [])

  return (
    <Layout>
      <Header>
        <Title>Welcome to Beauop</Title>
        <Paragraph>Automatic event blog publisher</Paragraph>
      </Header>
      <Main>{blogs.length ? <BlogList items={blogs} /> : <EmptyBlog />}</Main>
    </Layout>
  )
}

export async function getStaticProps({}) {
  return {
    props: {
      blogs: getBlogData(),
    },
  }
}

export default Blog;