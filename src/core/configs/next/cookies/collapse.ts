'use server'
import { cookies } from 'next/headers'

export async function toggleCollapse() {
  const collapse = await getCollapse()
  const valueInversion = collapse === 'true' ? 'false' : 'true'
  cookies().set('collapse', valueInversion)
}

export async function getCollapse() {
  const cookieStore = cookies()
  const collapse = cookieStore.get('collapse')?.value ?? 'false'

  return collapse
}
