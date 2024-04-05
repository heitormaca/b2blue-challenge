'use client'
import { Box, Button, Stack, Tooltip, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { OrderProps } from './Order.types'
import ProgressBar from '@/components/_commons/ProgressBar'
import collect from './actions'
import { useModals } from '@/core/context/Modal'
import { useSnackbar } from 'notistack'

export default function Order({ order }: OrderProps) {
  const { confirm } = useModals()
  const { enqueueSnackbar } = useSnackbar()

  const collectionOrderDate = dayjs(order.collectionOrderDate).format(
    'DD/MM/YYYY'
  )

  const collectDate = order.collectDate
    ? dayjs(order.collectDate).format('DD/MM/YYYY')
    : null

  return (
    <Box
      border={1}
      borderRadius={1}
      p={2}
      borderLeft={8}
      borderColor={order.collectDate ? '#52b202' : '#f50057'}
    >
      <Stack spacing={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">{order.name}</Typography>
          <Tooltip
            title={collectDate ? 'Data da coleta' : 'Data do pedido de coleta'}
          >
            <Typography variant="body2">
              {collectDate ?? collectionOrderDate}
            </Typography>
          </Tooltip>
        </Stack>
        <Stack>
          <Typography>Volume da estação:</Typography>
          <ProgressBar volume={order.volume} />
        </Stack>
        <Button
          variant="contained"
          disabled={!!collectDate}
          onClick={() =>
            confirm({
              message:
                'Você deseja confirmar a realização da coleta da estação?',
              onOk: async () => {
                await collect({
                  order: order
                }).then(() =>
                  enqueueSnackbar('Estação coletada com sucesso!', {
                    variant: 'success'
                  })
                )
              }
            })
          }
        >
          {collectDate ? 'Coletado' : 'Efetuar coleta'}
        </Button>
      </Stack>
    </Box>
  )
}
