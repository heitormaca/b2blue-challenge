'use client'
import { useRouter, usePathname } from 'next/navigation'
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { MobileDrawerMenuProps } from './MobileDrawerMenu.types'
import { menuList } from '@/app/menuList'

export default function MobileDrawerMenu({
  open,
  onClose
}: MobileDrawerMenuProps) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Drawer open={open} onClose={onClose}>
      <Box sx={{ width: '100vw' }} role="presentation" onClick={onClose}>
        <Box>
          <Container>
            <Box sx={{ height: '56px', display: 'flex', alignItems: 'center' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={onClose}
                color="inherit"
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <List component="nav" aria-label="main-menu">
              {menuList.map(item => (
                <ListItem key={item.title} disablePadding>
                  <ListItemButton
                    selected={pathname === item.path}
                    onClick={() => router.push(`${item.path}`)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Container>
        </Box>
      </Box>
    </Drawer>
  )
}
