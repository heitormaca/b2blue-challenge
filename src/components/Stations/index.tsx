import { Grid } from '@mui/material'
import Snackbar from '@/components/_commons/Snackbar'
import Station from './components/Station'
import { Station as StationType } from './components/Station/Station.types'

export default async function StationList() {
  const stations = await fetch('http://localhost:3000/stations', {
    next: { tags: ['stations'] }
  })

  const data = (await stations.json()) as StationType[]

  return (
    <>
      <Grid container spacing={2}>
        {data.map(station => (
          <Grid key={station.id} item xs={12} md={4}>
            <Station station={station} />
          </Grid>
        ))}
      </Grid>
      <Snackbar stations={data} />
    </>
  )
}
