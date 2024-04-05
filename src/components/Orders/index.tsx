import { Grid } from '@mui/material'
import { Order as OrderType } from './components/Order/Order.types'
import Order from './components/Order'

export default async function OrderList() {
  const orders = await fetch('http://localhost:3000/orders', {
    next: { tags: ['orders'] }
  })

  const data = (await orders.json()) as OrderType[]

  return (
    <>
      <Grid container spacing={2}>
        {data.map(order => (
          <Grid key={order.id} item xs={12} md={4}>
            <Order order={order} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
