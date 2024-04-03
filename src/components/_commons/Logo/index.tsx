import AdbIcon from '@mui/icons-material/Adb'
import { Typography } from '@mui/material'

export default function Logo() {
  return (
    <>
      <AdbIcon sx={{ mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="/dashboard"
        sx={{
          mr: 2,
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none'
        }}
      >
        LOGO
      </Typography>
    </>
  )
}
