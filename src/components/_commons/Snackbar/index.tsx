'use client'
import React, { useEffect } from 'react'
import { Button, IconButton, Snackbar as MUISnackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useSnackbar } from '@/core/context/Snackbar'
import { Station } from '@/components/Stations/components/Station/Station.types'

export default function Snackbar({ stations }: { stations: Station[] }) {
  const { openSnackbar, toggleSnackbar } = useSnackbar()

  useEffect(() => {
    if (stations.length && !openSnackbar) {
      const hasStation = stations.some(station => {
        return station.volume >= 80
      })

      if (hasStation) {
        toggleSnackbar()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stations, openSnackbar])

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={toggleSnackbar}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={toggleSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <div>
      <MUISnackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={toggleSnackbar}
        message="Note archived"
        action={action}
      />
    </div>
  )
}
