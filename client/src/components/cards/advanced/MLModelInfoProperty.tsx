// ** Libraries
import React from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

type Props = {
  title: string
  index: number
  progress: number
  color: ThemeColor
  amount: string
  subtitle: string
  imgSrc: string
}

const MLModelInfoProperty = (item: Props) => {
  return (
    <Box
      key={item.title}
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 5
      }}
    >
      <Avatar
        variant='rounded'
        sx={{ mr: 3, backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.04)` }}
      >
        <img src={item.imgSrc} alt={item.title} width={22} height={20} />
      </Avatar>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
            {item.title}
          </Typography>
          <Typography variant='caption'>{item.subtitle}</Typography>
        </Box>

        <Box sx={{ minWidth: 85, display: 'flex', flexDirection: 'column' }}>
          <Typography variant='body2' sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
            {item.amount}
          </Typography>
          <LinearProgress color={item.color} value={item.progress} variant='determinate' />
        </Box>
      </Box>
    </Box>
  )
}

export default MLModelInfoProperty
