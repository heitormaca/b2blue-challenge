import { ReactNode } from 'react'

export type UserMenuItemProps = {
  icon: ReactNode
  title: string
  handleClick?: VoidFunction
}
