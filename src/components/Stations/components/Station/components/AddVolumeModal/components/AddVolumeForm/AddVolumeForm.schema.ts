import { z } from 'zod'

export const addVolumeFormSchema = (volume: number = 1) =>
  z.object({
    volume: z
      .number({ invalid_type_error: 'Informe uma porcentagem' })
      .min(volume, `Mínimo de ${volume}%`)
      .max(100, 'Máximo até 100%')
  })

export type AddVolumeFormValues = z.infer<
  ReturnType<typeof addVolumeFormSchema>
>
