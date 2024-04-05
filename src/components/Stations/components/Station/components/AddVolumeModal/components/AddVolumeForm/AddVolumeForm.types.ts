import { ZodIssue } from 'zod'
import { Station } from '../../../../Station.types'

export interface AddVolumeFormProps {
  action: (_prevState: any, params: FormData) => Promise<{ errors: ZodIssue[] }>
  station: Station
}
