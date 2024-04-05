import { Grid, Typography } from '@mui/material'
import OrderList from '@/components/Orders'
import Panel from '@/components/_commons/Panel'

export default function Orders() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Pedidos de coleta</Typography>
        </Grid>
        <Grid item xs={12}>
          <Panel>
            <div>
              <OrderList />
            </div>
          </Panel>
        </Grid>
      </Grid>
    </div>
  )
}
