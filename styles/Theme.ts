import * as colors from '../utils/colors'

const blogTheme = {
  light: {
    default: {
      bg: colors.white,
      text: colors.black,
    },
    inverse: {
      bg: colors.black,
      text: colors.white,
    },
  },
  dark: {
    default: {
      bg: colors.black,
      text: colors.white,
    },
    inverse: {
      bg: colors.white,
      text: colors.black,
    },
  },
}

const defaultTheme = {
  light: {
    default: {
      bg: colors.white,
      text: colors.black,
    },
    inverse: {
      text: colors.white,
      bg: colors.black,
    },
  },
  dark: {
    bg: colors.black,
    text: colors.white,
    inverse: {
      text: colors.black,
      bg: colors.white,
    },
  },
}
export const themeProperty: { [key: string]: any } = {
  ...defaultTheme,
  ...blogTheme,
}
