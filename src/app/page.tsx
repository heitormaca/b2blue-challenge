import Gauge from '@/components/Gauge'
import Panel from '@/components/_commons/Panel'
import { Grid, Typography } from '@mui/material'

export default function Stations() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Estações</Typography>
      </Grid>
      <Grid item xs={12}>
        <Panel>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Gauge title="Estação 1" />
            </Grid>
            <Grid item xs={12} md={4}>
              <Gauge title="Estação 2" />
            </Grid>
            <Grid item xs={12} md={4}>
              <Gauge title="Estação 3" />
            </Grid>
          </Grid>
        </Panel>
      </Grid>
    </Grid>
  )
}
