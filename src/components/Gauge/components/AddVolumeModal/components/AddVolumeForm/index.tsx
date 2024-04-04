import { Button, Stack, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { AddVolumeFormProps } from './AddVolumeForm.types'
import {
  AddVolumeFormValues,
  addVolumeFormSchema
} from './AddVolumeForm.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import styles from './AddVolumeForm.module.css'

export function AddVolumeForm({ volume, setVolume }: AddVolumeFormProps) {
  const form = useForm<AddVolumeFormValues>({
    defaultValues: {
      volume: volume
    },
    resolver: zodResolver(addVolumeFormSchema(volume))
  })

  function addVolume({ volume }: AddVolumeFormValues) {
    console.log(typeof volume)
    setVolume(Number(volume))
  }

  const { register, handleSubmit, formState } = form

  const { errors } = formState

  return (
    <div>
      <form onSubmit={handleSubmit(addVolume)}>
        <Stack direction="row" spacing={2}>
          <TextField
            className={styles.inputNumber}
            label="Insira a porcentagem do volume"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            {...register('volume', { valueAsNumber: true })}
            error={!!errors.volume}
            helperText={errors.volume?.message}
          />
          <Button type="submit">Adicionar</Button>
        </Stack>
      </form>
    </div>
  )
}
