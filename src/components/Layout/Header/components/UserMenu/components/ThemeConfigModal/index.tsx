import Image from 'next/image'
import { Box, Button, Typography, useColorScheme } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Modal from '@/components/_commons/Modal'
import light from '../../../../../../../../public/theme-light.svg'
import dark from '../../../../../../../../public/theme-dark.svg'
import { toogleColorScheme } from '@/core/configs/next/cookies/colorScheme'

export default function ThemeConfigModal(props: ThemeConfigModalProps) {
  const { colorScheme, setMode } = useColorScheme()

  const isDarkMode = colorScheme === 'dark'

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      title="Configurar tema"
    >
      <div>
        <Typography id="modal-modal-description">
          Selecione o tipo de tema entre modo claro e escuro.
        </Typography>
        <Grid container spacing={2} mt={1}>
          <Grid xs={6}>
            <Button
              sx={{ padding: 0 }}
              onClick={() => {
                toogleColorScheme('light')
                setMode('light')
              }}
            >
              <Box
                sx={{
                  border: '2px dashed transparent',
                  borderWidth: '2px',
                  borderStyle: 'dashed',
                  borderColor: !isDarkMode ? 'green' : 'transparent',
                  padding: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  src={light}
                  alt="Image that represent light theme"
                  width={150}
                />
              </Box>
            </Button>
          </Grid>
          <Grid xs={6}>
            <Button
              sx={{ padding: 0 }}
              onClick={() => {
                toogleColorScheme('dark')
                setMode('dark')
              }}
            >
              <Box
                sx={{
                  border: '2px dashed transparent',
                  borderWidth: '2px',
                  borderStyle: 'dashed',
                  borderColor: isDarkMode ? 'green' : 'transparent',
                  padding: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  src={dark}
                  alt="Image that represent dark theme"
                  width={150}
                />
              </Box>
            </Button>
          </Grid>
        </Grid>
      </div>
    </Modal>
  )
}
