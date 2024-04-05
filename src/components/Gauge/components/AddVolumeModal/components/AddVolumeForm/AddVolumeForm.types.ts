import { Station } from '@/app/components/GaugeStations/GaugeStations.Types'
import { ZodIssue } from 'zod'

export interface AddVolumeFormProps {
  action: (_prevState: any, params: FormData) => Promise<{ errors: ZodIssue[] }>
  station: Station
}
