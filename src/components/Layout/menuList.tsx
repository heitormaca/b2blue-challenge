import { ReactNode } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import RecyclingIcon from '@mui/icons-material/Recycling'

export type MenuItemProps = {
  title: string
  path: string
  icon: ReactNode
}

export const menuList: MenuItemProps[] = [
  {
    title: 'Estações',
    path: '/',
    icon: <DashboardIcon />
  },
  {
    title: 'Pedidos',
    path: '/orders',
    icon: <RecyclingIcon />
  }
]
