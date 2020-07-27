import React from 'react'
import { NextPage } from 'next'
import { FaMoon, FaRegMoon } from 'react-icons/fa'
import { useDarkMode } from '../hooks'
import { ThemeProvider } from 'styled-components'
import { themeProperty, GlobalStyles } from '../styles'

export const Layout: NextPage<{}> = ({ children }) => {
  const [theme, themeToggler, mounted] = useDarkMode()
  // prevents ssr flash for mismatched dark mode
  if (!mounted) return <div style={{ visibility: 'hidden' }} />
  return (
    <ThemeProvider theme={themeProperty[theme]}>
      <GlobalStyles />
      <div className="absolute right-0 m-2 rounded-full inline-flex items-center">
        <button
          className="focus:outline-none active:outline-none"
          onClick={themeToggler}
        >
          {theme === 'light' ? <FaMoon /> : <FaRegMoon />}
        </button>
      </div>
      {children}
      <footer className="relative bottom-0 w-full h-30 mb-2 flex flex-row justify-center items-center">
        <a
          href={'https://github.com/rjoydip'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center"
        >
          Powered by rjoydip
        </a>
      </footer>
    </ThemeProvider>
  )
}
