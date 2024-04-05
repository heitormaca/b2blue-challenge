import type { Metadata } from 'next'
import { Box } from '@mui/material'
import { MUIConfigProvider } from '@/core/configs/mui'
import styles from './Layout.module.css'
import Header from '@/components/Layout/Header'
import Sidebar from '@/components/Layout/Sidebar'
import { getCollapse } from '@/core/configs/next/cookies/collapse'
import { getColorScheme } from '@/core/configs/next/cookies/colorScheme'
import SnackbarProvider from '@/core/context/Snackbar'

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

  const isDarkTheme = colorMode === 'dark'

  return (
    <html lang="pt-BR" data-mui-color-scheme={colorMode}>
      <body>
        <SnackbarProvider>
          <MUIConfigProvider colorMode={colorMode}>
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
                    paddingX: 3,
                    bgcolor: isDarkTheme
                      ? 'rgba(31, 38, 46, 0.15)'
                      : 'rgba(243, 246, 249, 0.6)',
                    overflow: 'auto'
                  }}
                >
                  {children}
                </Box>
              </Box>
            </Box>
          </MUIConfigProvider>
        </SnackbarProvider>
      </body>
    </html>
  )
}
