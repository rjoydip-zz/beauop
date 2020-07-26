import React, { useEffect } from 'react'
import { Layout } from '../components'
import { Title, Paragraph, Link } from '../components/styles'

export default () => {
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
      <Title>Welcome to Next Preact Typescript PWA!</Title>

      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis varius quam
        quisque id diam. Felis imperdiet proin fermentum leo vel orci porta non.
        Scelerisque viverra mauris in aliquam
      </Paragraph>

      <Link
        href="https://loremipsum.io/"
      >
        Lorem ipsum
      </Link>
      <style jsx>{``}</style>
    </Layout>
  )
}
