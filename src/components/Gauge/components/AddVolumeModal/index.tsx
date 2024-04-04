import Modal from '@/components/_commons/Modal'
import { AddVolumeModalProps } from './AddVolumeModal.types'
import { AddVolumeForm } from './components/AddVolumeForm'

export default function AddVolumeModal(props: AddVolumeModalProps) {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="Adicionar volume"
      aria-describedby="Adicionar volume"
      title={`Adicionar volume da '${props.station}'`}
      position="top"
    >
      <AddVolumeForm volume={props.volume} setVolume={props.setVolume} />
    </Modal>
  )
}
