'use server'

import { revalidateTag } from 'next/cache'
import { Order } from './Order.types'
import { Station } from '@/components/Stations/components/Station/Station.types'

type Props = {
  order: Order
}

export default async function collect({ order }: Props) {
  const newOrder = {
    stationId: order.stationId,
    name: order.name,
    volume: order.volume,
    collected: 'true',
    collectDate: new Date().toISOString(),
    collectionOrderDate: order.collectionOrderDate
  }

  const station = await fetch(
    `http://localhost:3000/stations/${order.stationId}`
  )

  const data = (await station.json()) as Station

  const newStation = {
    name: data.name,
    volume: 0
  }

  const updateOrderPromise = fetch(`http://localhost:3000/orders/${order.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newOrder)
  })

  const updateStationPromise = fetch(
    `http://localhost:3000/stations/${order.stationId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newStation)
    }
  )

  await Promise.all([updateOrderPromise, updateStationPromise])
  revalidateTag('stations')
  revalidateTag('orders')
}
