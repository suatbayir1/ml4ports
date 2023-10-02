// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

// ** Third Party Imports
import ScrollBar from 'react-perfect-scrollbar'

// ** Helpers
import { getShipOperationTime } from 'src/helpers/converter/timeConverter'

// ** Store
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

interface DataType {
  src: string
  title: string
  subtitle: Date
  chipText: string
  chipColor: ThemeColor
}

const Ships = () => {
  // ** Hooks
  const store = useSelector((state: RootState) => state.simulation)

  return (
    <Card>
      <CardHeader
        title='Ships'
        action={
          <OptionsMenu
            options={['Refresh', 'Share', 'Reschedule']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
          />
        }
      />
      <CardContent>
        <ScrollBar style={{ height: 120 }}>
          {store.hierarchy.ships.map((item: DataType, index: number) => {
            return (
              <Box
                key={item.title}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ...(index !== store.hierarchy.ships.length - 1 ? { mb: 6 } : {})
                }}
              >
                <Avatar src={'/images/icons/simulation/ship.png'} sx={{ mr: 3, width: 38, height: 38 }} />
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ mr: 2, display: 'flex', mb: 0.4, flexDirection: 'column' }}>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        lineHeight: 1.71,
                        letterSpacing: '0.22px',
                        fontSize: '0.875rem !important'
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& svg': { mr: 1, color: 'text.secondary', verticalAlign: 'middle' }
                      }}
                    >
                      <Icon fontSize='0.875rem' icon='mdi:calendar-blank-outline' />
                      <Typography variant='caption'>{getShipOperationTime(item.subtitle)}</Typography>
                    </Box>
                  </Box>
                  <CustomChip
                    skin='light'
                    size='small'
                    label={item.chipText}
                    color={item.chipColor}
                    sx={{ height: 20, mt: 0.4, fontSize: '0.75rem', fontWeight: 600 }}
                  />
                </Box>
              </Box>
            )
          })}
        </ScrollBar>
      </CardContent>
    </Card>
  )
}

export default Ships
