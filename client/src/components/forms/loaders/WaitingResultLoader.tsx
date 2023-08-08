import React from 'react'

// ** MUI Imports
import { CircularProgress, Typography, Box } from '@mui/material'

type Props = {}

const WaitingResultLoader = (props: Props) => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h6' component='span' sx={{ fontSize: '1rem' }}>
          Waiting for result
        </Typography>
      </Box>
    </>
  )
}

export default WaitingResultLoader
