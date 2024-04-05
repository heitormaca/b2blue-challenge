'use client'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState
} from 'react'
import {
  Modal as MUIModal,
  Box,
  IconButton,
  Stack,
  Typography,
  Button
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export interface Modals {
  confirm: (props: {
    message: string
    okButtonText?: string
    onOk?: () => void
  }) => Promise<any> | any
}

type Props = {
  message: string
  okButtonText?: string
  onOk?: () => void
}

interface AnyEvent {
  preventDefault(): void
}

const defaultContext: Modals = {
  confirm() {
    throw new Error('<ModalProvider> is missing')
  }
}

const Context = createContext<Modals>(defaultContext)

export default function ModalProvider({
  children
}: Readonly<{ children: ReactNode }>) {
  const [modal, setModal] = useState<ReactNode | boolean>(false)
  const ok = useRef<HTMLButtonElement>(null)

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'var(--md-demo-palette-background-paper)',
    boxShadow: 24
  }

  const createOpener = useCallback(
    () =>
      ({ message, okButtonText, onOk }: Props) =>
        new Promise(resolve => {
          const handleClose = (e: any) => {
            setModal(false)
            resolve(null)
          }

          const handleCancel = () => {
            setModal(false)
            resolve(false)
          }

          const handleOk = (e?: AnyEvent) => {
            e?.preventDefault()
            setModal(false)
            onOk?.()
            resolve(true)
          }

          setModal(
            <MUIModal open={true} onClose={handleClose}>
              <Box sx={style}>
                <Stack spacing={2} p={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton
                      size="small"
                      aria-label="close theme modal"
                      aria-controls="close-theme-modal"
                      aria-haspopup="true"
                      onClick={handleClose}
                      color="inherit"
                      sx={{ p: 0 }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <Box>
                    <Typography fontWeight={600}>{message}</Typography>
                  </Box>
                  <Stack direction="row" justifyContent="flex-end">
                    <Button
                      sx={{
                        mr: 2,
                        border:
                          '1px solid rgba(var(--md-demo-palette-primary-mainChannel) / 0.5)',
                        color: 'var(--md-demo-palette-primary-main)'
                      }}
                      variant="outlined"
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      onClick={handleOk}
                      ref={ok}
                      variant="contained"
                    >
                      {okButtonText ?? 'Confirmar'}
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </MUIModal>
          )
        }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <Context.Provider value={{ confirm: createOpener() }}>
      {children}
      {modal}
    </Context.Provider>
  )
}

export const useModals = () => useContext(Context)
