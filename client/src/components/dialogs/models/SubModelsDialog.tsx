// ** React Imports
import { useState } from 'react'
import ReactJson from 'react-json-view'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { MLModelType } from 'src/types/components/mlTypes'

// ** Components Imports
import MachineLearningModelInfoCard from 'src/components/cards/advanced/MachineLearningModelInfoCard'
import { number } from 'yup'

interface IProps {
  open: boolean
  model: MLModelType
  handleClose: () => void
}

const SubModelsDialog = (props: IProps) => {
  const { open, model, handleClose } = props

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open} fullWidth maxWidth='md'>
        <DialogTitle id='customized-dialog-title' sx={{ p: 4 }}>
          <Typography variant='h6' component='span'>
            Sub Models of {model.modelName}
          </Typography>
          <IconButton
            aria-label='close'
            onClick={handleClose}
            sx={{ top: 10, right: 10, position: 'absolute', color: 'grey.500' }}
          >
            <Icon icon='mdi:close' />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ p: 4 }}>
          <Grid container spacing={6}>
            {model.subModels?.map((subModel: any, index: number) => {
              return (
                <Grid item xs={12} md={12} lg={6} key={index}>
                  <MachineLearningModelInfoCard model={subModel} type='sub-model' />
                </Grid>
              )
            })}
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default SubModelsDialog
