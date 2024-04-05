import { Station } from '@/app/components/GaugeStations/GaugeStations.Types'

export type AddVolumeModalProps = {
  open: boolean
  onClose: VoidFunction
  station: Station
}
