import { Station } from '../../Station.types'

export type AddVolumeModalProps = {
  open: boolean
  onClose: VoidFunction
  station: Station
}
