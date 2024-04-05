'use client'
import { Button, Stack, TextField } from '@mui/material'
import { useFormState } from 'react-dom'
import { ZodIssue } from 'zod'
import { AddVolumeFormProps } from './AddVolumeForm.types'
import styles from './AddVolumeForm.module.css'

export default function AddVolumeForm({ action, station }: AddVolumeFormProps) {
  const [state, formAction] = useFormState(
    async (state: any, payload: FormData) => (await action)(state, payload),
    { errors: [] }
  )

  const volumeErrors = findErrors('volume', state.errors)

  return (
    <div>
      <form action={formAction}>
        <Stack direction="row" spacing={2}>
          <TextField
            className={styles.inputNumber}
            label="Insira a porcentagem do volume"
            name="volume"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            error={!!volumeErrors.length}
            helperText={volumeErrors}
          />
          <input name="stationId" value={station.id} type="hidden" />
          <input name="stationVolume" value={station.volume} type="hidden" />
          <input name="stationName" value={station.name} type="hidden" />
          <Button variant="contained" type="submit">
            Adicionar
          </Button>
        </Stack>
      </form>
    </div>
  )
}

const findErrors = (fieldName: string, errors: ZodIssue[]) => {
  return errors
    .filter(item => {
      return item.path.includes(fieldName)
    })
    .map(item => item.message)
}
