import { Grid } from '@mui/material'
import { Station } from './GaugeStations.Types'
import Gauge from '@/components/Gauge'
import Snackbar from '@/components/_commons/Snackbar'

export default async function GaugeStations() {
  const stations = await fetch('http://localhost:3000/stations', {
    next: { tags: ['stations'] }
  })

  const data = (await stations.json()) as Station[]

  return (
    <>
      <Grid container spacing={2}>
        {data.map(station => (
          <Grid key={station.id} item xs={12} md={4}>
            <Gauge station={station} />
          </Grid>
        ))}
      </Grid>
      <Snackbar stations={data} />
    </>
  )
}
