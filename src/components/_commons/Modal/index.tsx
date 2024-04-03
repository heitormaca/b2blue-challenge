import { Box, IconButton, Modal as MUIModal, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { ModalProps, positionDictionary } from './Modal.types'

export default function Modal(props: ModalProps) {
  const style = {
    position: 'absolute' as 'absolute',
    top: props.position
      ? positionDictionary[`${props.position}`]
      : positionDictionary['top'],
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: props.width ? props.width : 400,
    bgcolor: 'background.paper',
    boxShadow: 24
  }

  return (
    <MUIModal {...props}>
      <Box sx={style}>
        <Box
          p={2}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
          className="modal-header"
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.title}
          </Typography>
          <IconButton
            size="small"
            aria-label="close theme modal"
            aria-controls="close-theme-modal"
            aria-haspopup="true"
            onClick={props.onClose}
            color="inherit"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box className="modal-content" sx={{ paddingX: 2, paddingBottom: 2 }}>
          {props.children}
        </Box>
      </Box>
    </MUIModal>
  )
}
