'use client'
import { Paper, styled } from '@mui/material'
import { ReactNode } from 'react'

export default function Panel({ children }: Readonly<{ children: ReactNode }>) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2)
  }))

  return <Item>{children}</Item>
}
