export type Order = {
  id: string
  stationId: string
  name: string
  volume: number
  collected: string
  collectDate: Date | null
  collectionOrderDate: Date
}

export type OrderProps = {
  order: Order
}
