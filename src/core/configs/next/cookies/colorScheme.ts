'use server'
import { cookies } from 'next/headers'

export async function toogleColorScheme(mode: 'dark' | 'light') {
  cookies().set('colorScheme', mode)
}

export async function getColorScheme() {
  const cookieStore = cookies()
  const colorScheme = cookieStore.get('colorScheme')
  return colorScheme?.value
}
