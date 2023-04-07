// ** React Imports
import { useState } from 'react'
import ReactJson from 'react-json-view'

// ** MUI Imports
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

interface IProps {
  open: boolean
  model: MLModelType
  handleOpen: () => void
  handleClose: () => void
}

const ModelMetadataDialog = (props: IProps) => {
  const { open, model, handleOpen, handleClose } = props
  const [json, setJson] = useState<MLModelType | Object>(model)

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open} fullWidth>
        <DialogTitle id='customized-dialog-title' sx={{ p: 4 }}>
          <Typography variant='h6' component='span'>
            Metadata of {model.modelName}
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
          <ReactJson
            src={json}
            name={'selectedNode'}
            iconStyle={'triangle'}
            indentWidth={3}
            collapsed={false}
            collapseStringsAfterLength={30}
            groupArraysAfterLength={100}
            enableClipboard={false}
            displayObjectSize={true}
            displayDataTypes={true}
            defaultValue={null}
            sortKeys={false}
            quotesOnKeys={false}
            style={{
              width: '100%'
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ModelMetadataDialog
