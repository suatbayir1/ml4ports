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
import ApexDonutChart from 'src/views/charts/apex-charts/ApexDonutChart'
import ApexColumnChart from 'src/components/charts/apexcharts/ApexColumnChart'
import ApexLineForecastChart from 'src/components/charts/apexcharts/ApexLineForecastChart'

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

const PortDashboard = () => {
  return (
    <ApexChartWrapper>
      <DatePickerWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <ApexColumnChart series={series} />
          </Grid>
          <Grid item xs={12}>
            <ApexLineForecastChart series={series} title={'İhracat-İthalat Tahmini'} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ApexDonutChart />
          </Grid>
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
