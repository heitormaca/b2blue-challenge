'use client'
import { createTheme } from '@mui/material'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export function useTheme() {
  const theme = createTheme({
    typography: {
      fontFamily: roboto.style.fontFamily
    }
  })

  return theme
}
