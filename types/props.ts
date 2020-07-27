import { ThemeProps } from 'styled-components'

export interface props
  extends ThemeProps<{
    bg: {
      primary: string
    }
    text: {
      primary: string
    }
  }> {}
