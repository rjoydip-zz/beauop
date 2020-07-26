import React from 'react'

export const useDarkMode = (): [string, () => void, boolean] => {
  const [theme, setTheme] = React.useState('light')
  const [mounted, setMounted] = React.useState(false)

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
    setMounted(true)
  }, [])

  return [theme, themeToggler, mounted]
}
