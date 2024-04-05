import Modal from '@/components/_commons/Modal'
import { AddVolumeModalProps } from './AddVolumeModal.types'
import AddVolumeForm from './components/AddVolumeForm'
import addVolumeAction from './components/AddVolumeForm/AddVolumeAction'

export default function AddVolumeModal({
  open,
  onClose,
  station
}: AddVolumeModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="Adicionar volume"
      aria-describedby="Adicionar volume"
      title={`Adicionar volume da '${station.name}'`}
      position="top"
    >
      <>
        <AddVolumeForm action={addVolumeAction} station={station} />
      </>
    </Modal>
  )
}
