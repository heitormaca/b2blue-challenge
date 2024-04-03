import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'B2Blue - Sistema de controle de volume de armazenamento',
  description: 'Desafio B2Blue'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}