'use client'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { SidebarProps } from './Sidebar.types'
import { usePathname, useRouter } from 'next/navigation'
import styles from './Sidebar.module.css'
import { menuList } from '@/components/Layout/menuList'

export default function Sidebar({ collapse }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleSidebarListItemIconOpen = !collapse
    ? styles.sidebarListItemIconOpen
    : styles.sidebarListItemIconCollapse

  const handleListItemTextOpen = !collapse
    ? styles.sidebarListItemTextOpen
    : styles.sidebarListItemTextCollapse

  return (
    <List sx={{ p: 0 }}>
      {menuList.map(item => (
        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            data-collapse={collapse}
            className={styles.sidebarListItemButton}
            sx={{
              minHeight: 48,
              px: 2.5
            }}
            selected={pathname === item.path}
            onClick={() => router.push(`${item.path}`)}
          >
            <ListItemIcon
              className={`${styles.sidebarListItemIcon} ${handleSidebarListItemIconOpen}`}
              sx={{
                minWidth: 0,
                justifyContent: 'center'
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              className={`${styles.sidebarListItemText} ${handleListItemTextOpen}`}
              primary={item.title}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
