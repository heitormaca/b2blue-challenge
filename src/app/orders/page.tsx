import Panel from '@/components/_commons/Panel'
import { Grid, Typography } from '@mui/material'

export default function Orders() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Pedidos de coleta</Typography>
        </Grid>
        <Grid item xs={12}>
          <Panel>
            <div></div>
          </Panel>
        </Grid>
      </Grid>
    </div>
  )
}
