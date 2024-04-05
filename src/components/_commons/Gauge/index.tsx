import { Gauge as MUIGauge, gaugeClasses } from '@mui/x-charts/Gauge'

import { GaugeProps } from './Gauge.types'

export default function Gauge({ volume, collectOrder }: GaugeProps) {
  return (
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
  )
}
