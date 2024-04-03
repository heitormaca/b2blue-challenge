import { ModalProps as MUIModalProps } from '@mui/material'

export type ModalProps = Omit<MUIModalProps, 'title' | 'onClose'> & {
  title: string
  width?: number
  position?: Position
  onClose: VoidFunction
}

type Position = 'top' | 'center' | 'bottom'

type PositionsValues = '25%' | '50%' | '75%'

type PositionDictionary = Record<Position, PositionsValues>

export const positionDictionary: PositionDictionary = {
  top: '25%',
  center: '50%',
  bottom: '75%'
}
