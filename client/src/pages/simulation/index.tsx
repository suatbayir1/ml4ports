import React from 'react'

// ** MUI Imports
import {
  Grid,
  Slider,
  Card,
  CardHeader,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  TextField
} from '@mui/material'
import TopInputs from 'src/components/simulation/TopInputs'
import SiteStatistics from 'src/components/simulation/SiteStatistics'
import Graph from 'src/components/simulation/Graph'
import Entities from 'src/components/simulation/Entities'

// ** Third Party Imports
import { ReactDatePickerProps } from 'react-datepicker'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { useTheme } from '@mui/material/styles'

type Props = {}

const index = (props: Props) => {
  const theme = useTheme()
  const { direction } = theme
  const popperPlacement: ReactDatePickerProps['popperPlacement'] = direction === 'ltr' ? 'bottom-start' : 'bottom-end'
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <TopInputs popperPlacement={popperPlacement}/>
                </Grid>
                <Grid item xs={12}>
                  <SiteStatistics />
                </Grid>
                {/* </Grid>

              <Grid container spacing={6}> */}
                <Grid item xs={4}>
                  <Entities />
                </Grid>
                <Grid item xs={8}>
                  <Graph />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default index
