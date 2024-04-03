'use client'
import { useState } from 'react'
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography
} from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import ThemeConfigModal from './components/ThemeConfigModal'
import { UserMenuItemProps } from './UserMenu.types'

export default function UserMenu() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const [themeModalOpen, setThemeModalOpen] = useState(false)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleThemeModalOpen = () => {
    setAnchorElUser(null)
    setThemeModalOpen(true)
  }

  const handleThemeModalClose = () => setThemeModalOpen(false)

  const userMenuList: UserMenuItemProps[] = [
    {
      icon: <AccountCircleIcon sx={{ mr: 1 }} />,
      title: 'Conta'
    },
    {
      icon: <DarkModeIcon sx={{ mr: 1 }} />,
      title: 'Configurar tema',
      handleClick: handleThemeModalOpen
    },
    {
      icon: <LogoutIcon sx={{ mr: 1 }} />,
      title: 'Sair'
    }
  ]

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp">R</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {userMenuList.map(menuItem => (
          <MenuItem key={menuItem.title} onClick={menuItem.handleClick}>
            <Box sx={{ display: 'flex' }}>
              {menuItem.icon}
              <Typography>{menuItem.title}</Typography>
            </Box>
          </MenuItem>
        ))}
        <ThemeConfigModal
          open={themeModalOpen}
          onClose={handleThemeModalClose}
        />
      </Menu>
    </Box>
  )
}
