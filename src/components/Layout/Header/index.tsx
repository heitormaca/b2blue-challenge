'use client'
import { useState } from 'react'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import UserMenu from './components/UserMenu'
import Logo from '@/components/_commons/Logo'
import MobileDrawerMenu from './components/MobileDrawerMenu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import classes from './Header.module.css'
import { toggleCollapse } from '@/core/configs/next/cookies/collapse'
import { HeaderProps } from './header.types'

export default function Header({ collapse }: HeaderProps) {
  const [open, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
  }

  const onOpen = () => {
    setOpen(true)
  }

  return (
    <AppBar position="fixed">
      <Box sx={{ paddingX: 3 }}>
        <Toolbar disableGutters>
          <Box className={classes.headerTabletLogo} sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>
          <Box className={classes.headerIconMobileButton} sx={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={onOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <MobileDrawerMenu open={open} onClose={onClose} />
          </Box>
          <Box className={classes.headerIconButton} sx={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => toggleCollapse()}
              color="inherit"
            >
              {JSON.parse(collapse) ? <MenuIcon /> : <MenuOpenIcon />}
            </IconButton>
          </Box>
          <Box
            className={classes.headerLogo}
            sx={{
              flexGrow: 1
            }}
          >
            <Logo />
          </Box>
          <UserMenu />
        </Toolbar>
      </Box>
    </AppBar>
  )
}
