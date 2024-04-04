'use client'
import { Button, Stack, Typography } from '@mui/material'
import { Gauge as MUIGauge, gaugeClasses } from '@mui/x-charts/Gauge'
import { GaugeProps } from './Gauge.types'
import { useState } from 'react'
import AddVolumeModal from './components/AddVolumeModal'

export default function Gauge({ title }: GaugeProps) {
  const [modalOpened, setModalOpened] = useState(false)
  const [volume, setVolume] = useState(0)

  const toggleModal = () => {
    setModalOpened(curr => !curr)
  }

  return (
    <Stack sx={{ alignItems: 'center' }}>
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
            fill: '#52b202'
          }
        }}
        text={({ value, valueMax }) => `${value} / ${valueMax}`}
      />
      <Button onClick={toggleModal}>Adicionar volume</Button>
      <AddVolumeModal
        open={modalOpened}
        onClose={toggleModal}
        station={title}
        setVolume={setVolume}
      />
    </Stack>
  )
}
