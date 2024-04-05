import Panel from '@/components/_commons/Panel'
import { Grid, Typography } from '@mui/material'
import GaugeStations from './components/GaugeStations'

export default function Stations() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Estações</Typography>
        </Grid>
        <Grid item xs={12}>
          <Panel>
            <div>
              <GaugeStations />
            </div>
          </Panel>
        </Grid>
      </Grid>
    </div>
  )
}
