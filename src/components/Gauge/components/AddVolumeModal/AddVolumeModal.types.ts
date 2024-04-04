import { Dispatch, SetStateAction } from 'react'

export type AddVolumeModalProps = {
  open: boolean
  onClose: VoidFunction
  station: string
  setVolume: Dispatch<SetStateAction<number>>
}
