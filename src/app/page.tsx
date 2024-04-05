import StationList from '@/components/Stations'
import Panel from '@/components/_commons/Panel'
import { Grid, Typography } from '@mui/material'

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
              <StationList />
            </div>
          </Panel>
        </Grid>
      </Grid>
    </div>
  )
}
