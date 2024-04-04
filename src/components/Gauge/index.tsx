'use client'
import { Button, Stack, Typography } from '@mui/material'
import { Gauge as MUIGauge, gaugeClasses } from '@mui/x-charts/Gauge'
import { GaugeProps } from './Gauge.types'
import { useState } from 'react'
import AddVolumeModal from './components/AddVolumeModal'
import AddIcon from '@mui/icons-material/Add'

export default function Gauge({ title }: GaugeProps) {
  const [modalOpened, setModalOpened] = useState(false)
  const [volume, setVolume] = useState(0)

  const toggleModal = () => {
    setModalOpened(curr => !curr)
  }

  const disableButton = volume === 100
  const collectOrder = volume >= 80

  return (
    <Stack
      sx={{
        alignItems: 'center',
        border: '1px solid',
        borderColor: 'var(--md-demo-palette-text-primary)',
        p: 2
      }}
    >
      <Typography variant="h6">{title}</Typography>

      <MUIGauge
        width={200}
        height={200}
        value={volume}
        startAngle={-110}
        endAngle={110}
        sx={{
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: '1.5rem',
            transform: 'translate(0px, 0px)'
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: collectOrder ? '#f50057' : '#52b202'
          }
        }}
        text={({ value, valueMax }) => `${value} / ${valueMax}`}
      />
      <Button
        disabled={disableButton}
        onClick={toggleModal}
        startIcon={<AddIcon />}
      >
        Adicionar volume
      </Button>
      <AddVolumeModal
        open={modalOpened}
        onClose={toggleModal}
        station={title}
        volume={volume}
        setVolume={setVolume}
      />
    </Stack>
  )
}
