// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Type Import
import { CardStatsCharacterProps } from 'src/@core/components/card-statistics/types'

// ** Custom Components Imports
import CardStatisticsCharacter from 'src/@core/components/card-statistics/card-stats-with-image'
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import CrmTotalSales from 'src/views/dashboards/crm/CrmTotalSales'
import CrmWeeklySales from 'src/views/dashboards/crm/CrmWeeklySales'
import CrmTotalGrowth from 'src/views/dashboards/crm/CrmTotalGrowth'
import CrmUpgradePlan from 'src/views/dashboards/crm/CrmUpgradePlan'
import CrmTransactions from 'src/views/dashboards/crm/CrmTransactions'
import CrmRevenueReport from 'src/views/dashboards/crm/CrmRevenueReport'
import CrmSalesOverview from 'src/views/dashboards/crm/CrmSalesOverview'
import CrmMeetingSchedule from 'src/views/dashboards/crm/CrmMeetingSchedule'
import CrmDeveloperMeetup from 'src/views/dashboards/crm/CrmDeveloperMeetup'
import CrmActivityTimeline from 'src/views/dashboards/crm/CrmActivityTimeline'
// import ApexDonutChart from 'src/views/charts/apex-charts/ApexDonutChart'
import ApexColumnChart from 'src/components/charts/apexcharts/ApexColumnChart'
import ApexLineForecastChart from 'src/components/charts/apexcharts/ApexLineForecastChart'


// ** Fake DB Imports
import goods from 'src/@fake-db/liman/goods'
import group_name_key from 'src/@fake-db/liman/group_name_key'
import lines from 'src/@fake-db/liman/lines'
import regime_names from 'src/@fake-db/liman/regime-names'
import containers from 'src/@fake-db/liman/containers'

import { forwardRef, useContext, useState } from 'react'
import { AbilityContext } from 'src/layouts/components/acl/Can'
import { format } from 'date-fns'
import { Card, CardContent, CardHeader, InputAdornment, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/lab'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import ApexLineChartContainers from 'src/views/charts/liman-graphs/ApexLineChartContainers'
import ApexLineChart from 'src/views/charts/liman-graphs/ApexLineChart'
import ApexHeatmapChart from 'src/views/charts/liman-graphs/ApexHeatmapChart'
import ApexDonutChart from 'src/views/charts/liman-graphs/ApexDonutChart'
import ApexColumnChartGoods from 'src/views/charts/liman-graphs/ApexColumnChartGoods'
import { useTranslation } from 'react-i18next'
import ApexBarChartShips from 'src/views/charts/liman-graphs/ApexBarChartShips'
import ApexBarChartLineKey from 'src/views/charts/liman-graphs/ApexBarChartLineKey'
import ApexBarChartGoods from 'src/views/charts/liman-graphs/ApexBarChartGoods'
import ApexBarChartCompany from 'src/views/charts/liman-graphs/ApexBarChartCompany'
import ApexBarChartLineKeyDB from 'src/views/charts/liman-graphs/ApexBarChartLineKeyDB'


interface PickerProps {
  start: Date | number
  end: Date | number
}

const data: CardStatsCharacterProps[] = [
  {
    stats: '13.7k',
    title: 'Ratings',
    trendNumber: '+38%',
    chipColor: 'primary',
    chipText: 'Year of 2022',
    src: '/images/cards/pose_f9.png'
  },
  {
    stats: '24.5k',
    trend: 'negative',
    title: 'Sessions',
    trendNumber: '-22%',
    chipText: 'Last Week',
    chipColor: 'secondary',
    src: '/images/cards/pose_m18.png'
  }
]

const series = [
  {
    name: 'İhracat',
    data: [90, 120, 55, 100, 80, 125, 175, 70, 88, 100]
  },
  {
    name: 'İthalat',
    data: [85, 100, 30, 40, 95, 90, 30, 110, 62, 43]
  }
]

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      style={{ display: value === index ? 'block' : 'none' }}
    >
      <Box>{children}</Box>
    </div>
  );
}



const PortDashboard = () => {
  const { t, i18n } = useTranslation()

  const ability = useContext(AbilityContext)  
  const [endDate, setEndDate] = useState<any>(null)
  const [startDate, setStartDate] = useState<any>(null)
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleOnChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  const CustomInput = forwardRef((props: PickerProps, ref) => {
    const startDateStr = props.start !== null ? format(props.start, 'MM/dd/yyyy') : ''
    const endDateStr = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null

    const value = `${startDateStr}${endDateStr !== null ? endDateStr : ''}`

    return (
      <TextField
        {...props}
        size='small'
        value={value}
        inputRef={ref}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Icon icon='mdi:bell-outline' />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              <Icon icon='mdi:chevron-down' />
            </InputAdornment>
          )
        }}
      />
    )
  })


  return (
    <ApexChartWrapper>
      <DatePickerWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <ApexColumnChart series={series} />
          </Grid>
          <Grid item xs={12}>
            <ApexLineForecastChart series={series} title={t("Export-Import Forecast")} />
          </Grid>
          {/* ======================= */}
            <Grid item xs={12}>
              <Card>
              <CardHeader
                title={t("ContainersGraphTitle")}
                action={
                  <DatePicker
                    selectsRange
                    endDate={endDate}
                    id='apexchart-area'
                    startDate={startDate}
                    selected={startDate}
                    onChange={handleOnChange}
                    placeholderText={t("DatePicker")}
                    customInput={<CustomInput start={startDate as Date | number} end={endDate as Date | number} />}
                  />}
                />
                <CardContent>
                  <Grid item container spacing={6} xs={12}>
                    <Grid item item md={4} xs={12}>
                      <ApexDonutChart containers={containers} regime_names={regime_names} startDate={startDate} endDate={endDate}/>
                    </Grid>
                    <Grid item md={8} xs={12}>
                      <ApexLineChartContainers containers={containers} regime_names={regime_names} startDate={startDate} endDate={endDate}/>
                    </Grid>
                  </Grid>
                  </CardContent>
                </Card>
              </Grid>
              {/* <Grid item xs={12}>
                <GoodsApexCharts goods={goods} groups={group_name_key} />
              </Grid> */}

              <Grid item xs={12}>
                {/* Add the tabs component */}
                <Tabs value={currentTab} onChange={handleTabChange}>
                  <Tab label="Ships" />
                  <Tab label="Line Keys" />
                  <Tab label="Goods" />
                  <Tab label="Companies" />
                </Tabs>

                {/* Add the tab panels */}
                <TabPanel value={currentTab} index={0}>
                  <ApexBarChartShips />
                </TabPanel>
                <TabPanel value={currentTab} index={1}>
                  <ApexBarChartLineKey />
                </TabPanel>
                <TabPanel value={currentTab} index={2}>
                  <ApexBarChartGoods />
                </TabPanel>
                <TabPanel value={currentTab} index={3}>
                  <ApexBarChartCompany />
                </TabPanel>
              </Grid>


              {/* <Grid item xs={12}>
                <ApexBarChartLineKeyDB/>
              </Grid> */}

              <Grid item xs={12}>
                <ApexColumnChartGoods goods={goods} title={"Number of goods"}/>
              </Grid>
              <Grid item xs={12}>
                <ApexLineChart goods={goods} groups={group_name_key} title={"Number of goods"}/>
              </Grid>
              <Grid item xs={12}>
                <ApexHeatmapChart lines={lines} title={"Discharge Lines"}/>
              </Grid>
              <Grid item container spacing={6} xs={12}>
              <Grid item md={6} xs={12}>
                <Card>
                  <CardHeader title='Common' />
                  <CardContent>
                    <Typography sx={{ mb: 4 }}>No ability is required to view this card</Typography>
                    <Typography sx={{ color: 'primary.main' }}>This card is visible to 'user' and 'admin' both</Typography>
                  </CardContent>
                </Card>
              </Grid>
              {ability?.can('read', 'liman-graphs-footer') ? (
                <Grid item md={6} xs={12}>
                  <Card>
                    <CardHeader title='Analytics' />
                    <CardContent>
                      <Typography sx={{ mb: 4 }}>User with 'Analytics' subject's 'Read' ability can view this card</Typography>
                      <Typography sx={{ color: 'error.main' }}>This card is visible to 'admin' only</Typography>
                    </CardContent>
                  </Card>
              </Grid>
            ) : null}
          </Grid>
          {/* ======================= */}
          <Grid item xs={12} sm={6} md={3}>
            <CrmTotalSales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CrmRevenueReport />
          </Grid>
          <Grid item xs={12} md={6}>
            <CrmSalesOverview />
          </Grid>
          <Grid item xs={12} md={6}>
            <CrmActivityTimeline />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={8}>
                <CrmWeeklySales />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Grid container spacing={6}>
                  <Grid item xs={6} sm={12}>
                    <CrmTotalGrowth />
                  </Grid>
                  <Grid item xs={6} sm={12}>
                    <CardStatisticsVerticalComponent
                      stats='862'
                      trend='negative'
                      trendNumber='-18%'
                      title='New Project'
                      subtitle='Yearly Project'
                      icon={<Icon icon='mdi:briefcase-variant-outline' />}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CrmUpgradePlan />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CrmMeetingSchedule />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CrmDeveloperMeetup />
          </Grid>
        </Grid>
      </DatePickerWrapper>
    </ApexChartWrapper>
  )
}

export default PortDashboard
