'use client'
import { createContext, useContext, useState } from 'react'
import { SnackbarContextParams, SnackbarProviderProps } from './Snackbar.types'

const SnackbarContext = createContext({} as SnackbarContextParams)

export default function SnackbarProvider(props: SnackbarProviderProps) {
  const [openSnackbar, setOpenSnackbar] = useState(false)
  function toggleSnackbar() {
    setOpenSnackbar(prev => !prev)
  }

  return (
    <SnackbarContext.Provider value={{ openSnackbar, toggleSnackbar }}>
      {props.children}
    </SnackbarContext.Provider>
  )
}

export function useSnackbar(): SnackbarContextParams {
  return useContext(SnackbarContext)
}
