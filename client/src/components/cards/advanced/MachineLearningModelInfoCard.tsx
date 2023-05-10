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
import MLModelInfoProperty from './MLModelInfoProperty'
// import ModelMetadataDialog from 'src/components/dialogs/models/ModelMetadataDialog'
const ModelMetadataDialog = dynamic(() => import('src/components/dialogs/models/ModelMetadataDialog'), { ssr: false })
const SubModelsDialog = dynamic(() => import('src/components/dialogs/models/SubModelsDialog'), { ssr: false })
const RedeployDialog = dynamic(() => import('src/components/dialogs/models/RedeployDialog'), { ssr: false })

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
  const [currentOverlay, setCurrentOverlay] = useState<string>('')

  const handleOpenModelMetadata = () => setOpenModelMetadata(true)
  const handleOpenSubModels = () => setOpenSubModels(true)
  const handleCloseModelMetadata = () => setOpenModelMetadata(false)
  const handleCloseSubModels = () => setOpenSubModels(false)

  const handleClickOption = (option: string) => {
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

  const getImageSource = (metricTitle: string) => {
    let src = ''

    switch (metricTitle) {
      case 'Accuracy':
        src = '/images/cards/logo-zipcar.png'
        break
      case 'F1 Score':
        src = '/images/cards/logo-bitbank.png'
        break
      case 'Recall':
        src = '/images/cards/logo-aviato.png'
        break
    }
    return src
  }

  console.log('metrics', model.metrics)

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
      <RedeployDialog
        open={currentOverlay === 'redeploy' ? true : false}
        handleClose={() => setCurrentOverlay('none')}
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
              {model.algorithm}
            </Typography>
          </Box>

          <Typography component='p' variant='caption' sx={{ mb: 5 }}>
            {dateToLocaleDateString(model.trainDate)}
          </Typography>

          {model.metrics && model.metrics.length > 0 ? (
            <>
              {model.metrics.map((item: any) => {
                console.log(item)
                return (
                  <MLModelInfoProperty
                    progress={item.progress}
                    title={item.title}
                    index={1}
                    color={item.color}
                    amount={item.amount}
                    subtitle={item.subtitle}
                    imgSrc={getImageSource(item.title)}
                  />
                )
              })}
            </>
          ) : (
            <h2>No metrics created</h2>
          )}

          <Button
            onClick={() => setCurrentOverlay('redeploy')}
            fullWidth
            variant='contained'
            sx={{ mt: 4.5 }}
            endIcon={<Icon icon='mdi:arrow-right' />}
          >
            Redeploy the model
          </Button>
        </CardContent>
      </Card>
    </>
  )
}

export default MachineLearningModelInfoCard
