'use client'
import { useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { StationProps } from './Station.types'
import AddVolumeModal from './components/AddVolumeModal'
import Gauge from '@/components/_commons/Gauge'

export default function Station({ station }: StationProps) {
  const [modalOpened, setModalOpened] = useState(false)

  const toggleModal = () => {
    setModalOpened(prev => !prev)
  }

  const disableButton = station.volume === 100
  const collectOrder = station.volume >= 80

  return (
    <Stack
      sx={{
        alignItems: 'center',
        border: '1px solid',
        borderColor: 'var(--md-demo-palette-text-primary)',
        p: 2,
        borderRadius: 1
      }}
    >
      <Typography variant="h6">{station.name}</Typography>
      <Gauge volume={station.volume} collectOrder={collectOrder} />
      <Button
        variant="contained"
        disabled={disableButton}
        onClick={toggleModal}
        startIcon={<AddIcon />}
      >
        Adicionar volume
      </Button>
      <AddVolumeModal
        open={modalOpened}
        onClose={toggleModal}
        station={station}
      />
    </Stack>
  )
}
