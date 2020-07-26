import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import pkg from '../package.json'
import styles from '../index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{pkg.title}</title>
        <meta name="Description" content="Diff tools" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="apple-mobile-web-app-title" content="" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/static/ms-icon-144x144.png"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/static/apple-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/android-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/static/favicon-96x96.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <noscript key="noscript">Your browser does not support JavaScript!</noscript>
      </Head>
      <Component {...styles} {...pageProps} />
    </>
  )
}

export default MyApp
