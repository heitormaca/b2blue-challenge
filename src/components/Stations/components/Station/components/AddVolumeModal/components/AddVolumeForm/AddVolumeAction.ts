'use server'
import { revalidateTag } from 'next/cache'
import { addVolumeFormSchema } from './AddVolumeForm.schema'
import { Order } from '@/components/Orders/components/Order/Order.types'

export default async function addVolumeAction(
  _prevState: any,
  params: FormData
) {
  const validation = addVolumeFormSchema(
    Number(params.get('stationVolume') || 0)
  ).safeParse({
    volume: Number(params.get('volume'))
  })

  if (validation.success) {
    const volume = Number(params.get('volume'))
    const stationId = params.get('stationId')
    const stationName = params.get('stationName')

    if (volume >= 80) {
      const orders = (await fetch(
        `http://localhost:3000/orders?stationId=${stationId}&collected=false`
      ).then(data => data.json())) as Order[]

      if (!orders.length) {
        const orderBody = {
          stationId: stationId,
          name: stationName,
          volume: volume,
          collected: 'false',
          collectDate: null,
          collectionOrderDate: new Date().toISOString()
        }

        await fetch('http://localhost:3000/orders', {
          method: 'POST',
          body: JSON.stringify(orderBody)
        })
      }
    }

    const newStation = {
      volume: volume,
      name: params.get('stationName')
    }
    await fetch(`http://localhost:3000/stations/${stationId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newStation)
    })
    revalidateTag('stations')
    revalidateTag('orders')
    return { errors: [] }
  } else {
    return {
      errors: validation.error.issues
    }
  }
}
