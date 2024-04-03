import type { Metadata } from 'next'
import { Box } from '@mui/material'
import { MUIConfigProvider } from '@/core/configs/mui'
import styles from './Layout.module.css'
import Header from '@/components/Layout/Header'
import Sidebar from '@/components/Layout/Sidebar'
import { getCollapse } from '@/core/configs/next/cookies/collapse'
import { getColorScheme } from '@/core/configs/next/cookies/colorScheme'

export const metadata: Metadata = {
  title: 'B2Blue - Sistema de controle de volume de armazenamento',
  description: 'Desafio B2Blue'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const colorMode = await getColorScheme()
  const collapse = await getCollapse()

  return (
    <html lang="pt-BR" data-mui-color-scheme={colorMode}>
      <body>
        <MUIConfigProvider colorMode={colorMode}>
          <main>
            <Header collapse={collapse} />
            <Box className={styles.contentBox}>
              <Box className={styles.boxSidebar}>
                <Sidebar collapse={JSON.parse(collapse)} />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Box
                  className={styles.mainContentBox}
                  sx={{
                    paddingY: 2,
                    paddingX: 4,
                    bgcolor: 'var(--md-demo-palette-common-background)',
                    overflow: 'auto '
                  }}
                >
                  {children}
                </Box>
              </Box>
            </Box>
          </main>
        </MUIConfigProvider>
      </body>
    </html>
  )
}
