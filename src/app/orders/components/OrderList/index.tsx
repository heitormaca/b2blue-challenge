import { Grid } from '@mui/material'
import { Order } from './OrderList.types'

export default async function OrderList() {
  const orders = await fetch('http://localhost:3000/orders', {
    next: { tags: ['orders'] }
  })

  const data = (await orders.json()) as Order[]

  return (
    <>
      <Grid container spacing={2}>
        {data.map(order => (
          <Grid key={order.id} item xs={12} md={4}></Grid>
        ))}
      </Grid>
    </>
  )
}
