export type Order = {
  id: string
  stationId: string
  name: string
  volume: number | null
  collected: boolean
  dateCollectOrder: Date
}
