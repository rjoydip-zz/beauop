import { ThemeProps } from 'styled-components'

interface ValueProps {
  bg: string
  text: string
}

export interface props
  extends ThemeProps<{
    default: ValueProps
    inverse: ValueProps
  }> {}
