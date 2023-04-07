// ** React Imports
import { useState } from 'react'

// ** Next Imports
import dynamic from 'next/dynamic'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'
import { MLModelType } from 'src/types/components/mlTypes'

// Helpers
import { dateToLocaleDateString } from 'src/helpers/converter/timeConverter'

// ** Custom Components Imports
import OptionsMenu from 'src/components/option-menu'
// import ModelMetadataDialog from 'src/components/dialogs/models/ModelMetadataDialog'
const ModelMetadataDialog = dynamic(() => import('src/components/dialogs/models/ModelMetadataDialog'), { ssr: false })
const SubModelsDialog = dynamic(() => import('src/components/dialogs/models/SubModelsDialog'), { ssr: false })

interface DataType {
  title: string
  imgSrc: string
  amount: string
  imgWidth: number
  progress: number
  subtitle: string
  color: ThemeColor
  imgHeight: number
}

interface IProps {
  model: MLModelType
}

const data: DataType[] = [
  {
    imgWidth: 22,
    progress: 75,
    imgHeight: 20,
    title: 'Trainer',
    color: 'primary',
    amount: '75%',
    subtitle: 'Suat Bayır',
    imgSrc: '/images/cards/logo-zipcar.png'
  },
  {
    imgWidth: 19,
    progress: 50,
    color: 'info',
    imgHeight: 27,
    title: 'F1 Score',
    amount: '50%',
    subtitle: 'Good',
    imgSrc: '/images/cards/logo-bitbank.png'
  },
  {
    imgWidth: 21,
    progress: 20,
    imgHeight: 20,
    title: 'Recall',
    color: 'secondary',
    amount: '20%',
    subtitle: 'Bad',
    imgSrc: '/images/cards/logo-aviato.png'
  }
]

const MachineLearningModelInfoCard = (props: IProps) => {
  const { model } = props

  const [openModelMetadata, setOpenModelMetadata] = useState<boolean>(false)
  const [openSubModels, setOpenSubModels] = useState<boolean>(false)

  const handleOpenModelMetadata = () => setOpenModelMetadata(true)
  const handleOpenSubModels = () => setOpenSubModels(true)
  const handleCloseModelMetadata = () => setOpenModelMetadata(false)
  const handleCloseSubModels = () => setOpenSubModels(false)

  const handleClickOption = (option: string) => {
    console.log('clicked', option)
    switch (option) {
      case 'Show Metadata':
        setOpenModelMetadata(true)
        break
      case 'Sub Models':
        setOpenSubModels(true)
        break
      default:
        break
    }
  }

  console.log('type', model.modelType)

  return (
    <>
      <ModelMetadataDialog
        open={openModelMetadata}
        handleOpen={handleOpenModelMetadata}
        handleClose={handleCloseModelMetadata}
        model={model}
      />
      <SubModelsDialog
        open={openSubModels}
        handleOpen={handleOpenSubModels}
        handleClose={handleCloseSubModels}
        model={model}
      />

      <Card sx={{ border: model.modelType === 'Ensemble' ? '1px solid red' : '1px solid blue' }}>
        <CardHeader
          title={model.modelName}
          action={
            <OptionsMenu
              handleClickOption={handleClickOption}
              options={model.modelType === 'Ensemble' ? ['Show Metadata', 'Sub Models'] : ['Show Metadata']}
              iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
            />
          }
        />
        <CardContent sx={{ pt: theme => `${theme.spacing(2.5)} !important` }}>
          <Box sx={{ mb: 0.5, display: 'flex', alignItems: 'center' }}>
            <Typography variant='h4' sx={{ fontWeight: 600, fontSize: '2.125rem !important' }}>
              ETA
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
              <Icon icon='mdi:menu-up' fontSize='1.875rem' />
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'success.main' }}>
                {model?.metrics?.accuracy}
              </Typography>
            </Box>
          </Box>

          <Typography component='p' variant='caption' sx={{ mb: 5 }}>
            {dateToLocaleDateString(model.trainDate)}
          </Typography>

          {data.map((item: DataType, index: number) => {
            return (
              <Box
                key={item.title}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: index !== data.length - 1 ? 5 : undefined
                }}
              >
                <Avatar
                  variant='rounded'
                  sx={{ mr: 3, backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.04)` }}
                >
                  <img src={item.imgSrc} alt={item.title} width={item.imgWidth} height={item.imgHeight} />
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
          })}

          <Button fullWidth variant='contained' sx={{ mt: 4.5 }} endIcon={<Icon icon='mdi:arrow-right' />}>
            Retrain the model
          </Button>
        </CardContent>
      </Card>
    </>
  )
}

export default MachineLearningModelInfoCard
