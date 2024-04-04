import Modal from '@/components/_commons/Modal'
import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { AddVolumeModalProps } from './AddVolumeModal.types'

export default function AddVolumeModal(props: AddVolumeModalProps) {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="Adicionar volume"
      aria-describedby="Adicionar volume"
      title="Adicionar volume"
      position="top"
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>{`Adicione volume da ${props.station}:`}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            <form>
              <TextField
                id="outlined-number"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <Button>Adicionar</Button>
            </form>
          </Stack>
        </Grid>
      </Grid>
    </Modal>
  )
}
