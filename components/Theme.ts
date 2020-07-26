import * as colors from '../utils/colors'

const light = {
  bg: colors.white,
  text: colors.black,
  link: colors.teal[700],
}

const dark = {
  bg: colors.black,
  text: colors.white,
  link: colors.orange[700],
}

const defaultTheme = {}
export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }
