'use client'
import { Button, Stack, Typography } from '@mui/material'
import { Gauge as MUIGauge, gaugeClasses } from '@mui/x-charts/Gauge'
import { GaugeProps } from './Gauge.types'
import { useState } from 'react'
import AddVolumeModal from './components/AddVolumeModal'
import AddIcon from '@mui/icons-material/Add'

export default function Gauge({ station }: GaugeProps) {
  const [modalOpened, setModalOpened] = useState(false)

  const toggleModal = () => {
    setModalOpened(curr => !curr)
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

      <MUIGauge
        key={station.id}
        width={200}
        height={200}
        value={station.volume}
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
