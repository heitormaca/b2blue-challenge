import { Dispatch, SetStateAction } from 'react'

export type AddVolumeModalProps = {
  open: boolean
  onClose: VoidFunction
  station: string
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>
}
