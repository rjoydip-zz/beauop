import React from 'react'
import { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import { FaMoon, FaRegMoon } from 'react-icons/fa'
import { useDarkMode } from '../hooks'
import { lightTheme, darkTheme } from '../components'
import { createGlobalStyle, ThemeProps } from 'styled-components'

interface props
  extends ThemeProps<{
    bg: {
      primary: string
    }
    text: {
      primary: string
    }
  }> {}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: props) => theme.bg};
    color: ${({ theme }: props) => theme.text};
    transition: all 0.50s linear;
  }
  `

const ThemeChange = ({ themeType = 'light', toggleTheme = () => {} }) => (
  <div className="absolute right-0 m-2 rounded-full inline-flex items-center">
    <button
      aria-label="Dark mode"
      className="focus:outline-none active:outline-none"
      onClick={toggleTheme}
    >
      {themeType === 'light' ? <FaMoon /> : <FaRegMoon />}
    </button>
  </div>
)

const Footer = ({ href, text }: { href: string; text: string }) => (
  <footer className="absolute bottom-0 w-full h-30 mb-2 flex flex-row justify-center items-center">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center"
    >
      {text}
    </a>
  </footer>
)

const Layout: NextPage<{}> = ({ children }) => {
  const [theme, themeToggler, mounted] = useDarkMode()
  // prevents ssr flash for mismatched dark mode
  if (!mounted) return <div style={{ visibility: 'hidden' }} />
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ThemeChange themeType={theme} toggleTheme={themeToggler} />
      <main className="py-8 flex flex-col justify-center items-center">
        {children}
      </main>
      <Footer href="https://github.com/rjoydip" text="Powered by rjoydip" />
      <style jsx>{``}</style>
    </ThemeProvider>
  )
}
export { Layout }
