import { PropsWithChildren } from 'react'

export type SnackbarContextParams = {
  openSnackbar: boolean
  toggleSnackbar: VoidFunction
}

export type SnackbarProviderProps = PropsWithChildren<unknown>
