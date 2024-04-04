import { Dispatch, SetStateAction } from 'react'

export type AddVolumeFormProps = {
  volume: number
  setVolume: Dispatch<SetStateAction<number>>
}
