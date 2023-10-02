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
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'

// ** Third Party Imports
import ScrollBar from 'react-perfect-scrollbar'

// ** Store
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

interface DataType {
  title: string
  amount: string
  subtitle: string
  trendDir: 'up' | 'down'
  avatarColor: ThemeColor
}

const Cranes = () => {
  // ** Hooks
  const store = useSelector((state: RootState) => state.simulation)

  return (
    <Card>
      <CardHeader
        title='Cranes'
        titleTypographyProps={{ sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' } }}
        action={
          <OptionsMenu
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
          />
        }
      />

      <CardContent>
        <ScrollBar style={{ height: 175 }}>
          {store.hierarchy.cranes.map((item: DataType, index: number) => {
            return (
              <Box
                key={index}
                sx={{
                  maxHeight: 200,
                  display: 'flex',
                  alignItems: 'center',
                  ...(index !== store.hierarchy.cranes.length - 1 ? { mb: 6 } : {})
                }}
              >
                <CustomAvatar skin='light' sx={{ mr: 3 }} variant='rounded' color={item.avatarColor}>
                  <img alt={'image'} src={'/images/icons/simulation/crane.png'} width={32} height={32} />
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
                    <Typography sx={{ mb: 0.25, fontWeight: 600, fontSize: '0.875rem' }}>{item.title}</Typography>
                    <Typography variant='caption'>{item.subtitle}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      '& svg': { color: item.trendDir === 'down' ? 'error.main' : 'success.main' }
                    }}
                  >
                    <Typography sx={{ mr: 1, fontWeight: 600 }}>{item.amount}</Typography>
                    <Icon icon={item.trendDir === 'down' ? 'mdi:chevron-down' : 'mdi:chevron-up'} />
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

export default Cranes
