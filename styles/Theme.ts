import * as colors from '../utils/colors'

const blogTheme = {
  light: {
    bg: colors.white,
    text: colors.black,
  },
  dark: {
    bg: colors.black,
    text: colors.white,
  },
}

const defaultTheme = {
  light: {
    bg: colors.white,
    text: colors.black,
  },
  dark: {
    bg: colors.black,
    text: colors.white,
  },
}
export const themeProperty: { [key: string]: any } = {
  ...defaultTheme,
  ...blogTheme,
}
