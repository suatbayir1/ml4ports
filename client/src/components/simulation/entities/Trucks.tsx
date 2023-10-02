// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Third Party Imports
import ScrollBar from 'react-perfect-scrollbar'

// ** Store
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

interface DataType {
  imgWidth: number
  imgHeight: number
  imgAlt: string
  imgSrc: string
  title: string
  sales: string
  trendDir: string
  subtitle: string
  avatarText: string
  trendNumber: string
  avatarColor: ThemeColor
}

const data: DataType[] = [
  {
    imgWidth: 32,
    imgHeight: 32,
    imgAlt: 'paypal',
    imgSrc: '/images/icons/simulation/truck.png',
    sales: '894',
    trendDir: 'up',
    subtitle: 'Truck 1',
    title: '33t',
    avatarText: 'US',
    trendNumber: '25.8%',
    avatarColor: 'success'
  },
  {
    imgWidth: 32,
    imgHeight: 32,
    imgAlt: 'paypal',
    imgSrc: '/images/icons/simulation/truck.png',
    sales: '645',
    subtitle: 'Truck 2',
    trendDir: 'down',
    title: '112t',
    avatarText: 'UK',
    trendNumber: '6.2%',
    avatarColor: 'error'
  },
  {
    imgWidth: 32,
    imgHeight: 32,
    imgAlt: 'paypal',
    imgSrc: '/images/icons/simulation/truck.png',
    sales: '148',
    title: '57t',
    trendDir: 'up',
    avatarText: 'IN',
    subtitle: 'Truck 3',
    trendNumber: '12.4%',
    avatarColor: 'warning'
  },
  {
    imgWidth: 32,
    imgHeight: 32,
    imgAlt: 'paypal',
    imgSrc: '/images/icons/simulation/truck.png',
    sales: '86',
    title: '65t',
    trendDir: 'down',
    avatarText: 'JA',
    subtitle: 'Truck 4',
    trendNumber: '11.9%',
    avatarColor: 'secondary'
  },
  {
    imgWidth: 32,
    imgHeight: 32,
    imgAlt: 'paypal',
    imgSrc: '/images/icons/simulation/truck.png',
    sales: '42',
    title: '75t',
    trendDir: 'up',
    avatarText: 'KO',
    subtitle: 'Truck 5',
    trendNumber: '16.2%',
    avatarColor: 'error'
  }
]

const Trucks = () => {
  // ** Hooks
  const store = useSelector((state: RootState) => state.simulation)

  console.log(store.hierarchy)

  return (
    <Card>
      <CardHeader
        title='Trucks'
        titleTypographyProps={{ sx: { lineHeight: '1.2 !important', letterSpacing: '0.31px !important' } }}
        action={
          <OptionsMenu
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', className: 'card-more-options', sx: { color: 'text.primary' } }}
          />
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
        <ScrollBar style={{ height: 175 }}>
          {store.hierarchy.trucks.map((item: DataType, index: number) => {
            return (
              <Box
                key={item.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ...(index !== data.length - 1 ? { mb: 6.25 } : {})
                }}
              >
                <CustomAvatar skin='light' sx={{ mr: 3 }} variant='rounded' color={item.avatarColor}>
                  <img alt={'truck-image'} src={'/images/icons/simulation/truck.png'} width={32} height={32} />
                </CustomAvatar>

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
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ mr: 0.5, fontWeight: 600, letterSpacing: '0.25px' }}>{item.name}</Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          '& svg': { fontWeight: 600, color: 'success.main' }
                        }}
                      >
                        <Icon icon={'mdi:chevron-up'} />
                        <Typography
                          variant='caption'
                          sx={{
                            fontWeight: 600,
                            lineHeight: 1.5,
                            color: 'success.main'
                          }}
                        >
                          {'35%'}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant='caption' sx={{ lineHeight: 1.5 }}>
                      {'100 tour'}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', textAlign: 'end', flexDirection: 'column' }}>
                    <Typography
                      sx={{ fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.72, letterSpacing: '0.22px' }}
                    >
                      {455}
                    </Typography>
                    <Typography variant='caption' sx={{ lineHeight: 1.5 }}>
                      Tour
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )
          })}
        </ScrollBar>
      </CardContent>
    </Card>
  )
}

export default Trucks
