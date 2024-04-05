'use client'
import { styled } from '@mui/material/styles'
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress'
import { ProgressBarProps } from './ProgressBar.types'
import { Box, Typography } from '@mui/material'

export default function ProgressBar({ volume }: ProgressBarProps) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#f50057'
    }
  }))

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <BorderLinearProgress variant="determinate" value={volume} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography>{`${volume}%`}</Typography>
      </Box>
    </Box>
  )
}
