import React, { useState, useEffect } from 'react'

// ** MUI Imports
import {
  Dialog, DialogTitle, DialogContent, Typography, IconButton,
  Grid, FormControl, Button, InputLabel, Box,
  DialogActions, Card, CardContent, Select, MenuItem,
  ListItemText, Checkbox, ListItem, ListItemAvatar, LinearProgress,
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { useTheme, styled } from '@mui/material/styles'

// ** Third Party Imports
import ScrollBar from 'react-perfect-scrollbar'

import List, { ListProps } from '@mui/material/List'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Axios Imports
import axios, { AxiosError } from 'axios'


const StyledList = styled(List)<ListProps>(({ theme }) => ({
    '& .MuiListItem-root': {
      border: `1px solid ${theme.palette.divider}`,
      '&:first-of-type': {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius
      },
      '&:last-child': {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius
      },
      '&:not(:last-child)': {
        borderBottom: 0
      },
      '& .MuiListItemText-root': {
        margin: theme.spacing(0, 0, 2),
        '& .MuiTypography-root': {
          fontWeight: 500
        }
      }
    }
  }))

const rules = {
    "cfs": "",
    "one": "",
    "isps": "",
    "ardiye": ""
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
      style: {
        width: 250,
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
      }
    }
  }

interface IProps {
  open: boolean
  handleClose: () => void
}

const SimulationConfigurationDialog = (props: IProps) => {
  const { open, handleClose } = props
  const theme = useTheme()
  const { direction } = theme

  const [ruleTitle, setRuleTitle] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setRuleTitle(event.target.value as string[])
  }

  const updateSimulationConfiguration = async () => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/simulation/updateSimulationConfiguration`
    axios
        .put(url, {rules: ruleTitle})
        .then(res => console.log("update result: ", res))
        .catch(err => console.log("uprate err: ", err))
  }

  const getSimulationConfiguration = async () => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/simulation/getSimulationConfiguration`
    axios
        .get(url)
        .then(res => {
            const configuration = res.data
            setRuleTitle(configuration.rules)
            console.log("configuration result ", configuration)
        })
        .catch(err => console.log('err', err))
  }

  useEffect(() => {
    getSimulationConfiguration()
    setInterval(() => {
      getSimulationConfiguration()
    }, 10 * 60 * 1000)
  }, [])

  /* useEffect(() => {
    groupYardGroupData(allContainersData)
  }, [allContainersData, selectedColumns]) */

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open} fullWidth maxWidth='lg'>
        <Grid container>
          <Grid item xs={4} sm={4}>
            <DialogTitle id='customized-dialog-title' sx={{ p: 4 }}>
              <Typography variant='h6' component='span'>
                Simulation Configuration
              </Typography>
            </DialogTitle>
          </Grid>
        </Grid>

        <DialogContent sx={{ p: 4 }}>
          <IconButton
            size='small'
            onClick={() => handleClose()}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <Icon icon='mdi:close' />
          </IconButton>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12}>
              <Card>
                <CardContent>
                <div>
                    <Typography sx={{ mb: 2, fontWeight: 500 }}>Rules</Typography>
                    <FormControl fullWidth>
                      <InputLabel id='demo-multiple-checkbox-label'>Select multiple</InputLabel>
                      <Select
                          multiple
                          label='Tag'
                          value={ruleTitle}
                          MenuProps={MenuProps}
                          onChange={handleChange}
                          id='demo-multiple-checkbox'
                          labelId='demo-multiple-checkbox-label'
                          renderValue={selected => (selected as unknown as string[]).join(', ')}
                      >
                          {Object.keys(rules).map(rule => (
                          <MenuItem key={rule} value={rule}>
                              <Checkbox checked={ruleTitle.indexOf(rule) > -1} />
                              <ListItemText primary={rule} />
                          </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12}>
                <ScrollBar style={{ height: 250 }}>
                    <StyledList disablePadding>
                        <ListItem>
                            <ListItemAvatar>
                            <CustomAvatar skin='light' variant='rounded' color='info' sx={{ height: 36, width: 36 }}>
                                <Icon icon='eos-icons:container' />
                            </CustomAvatar>
                            </ListItemAvatar>
                            <Box sx={{ width: '100%' }}>
                            <ListItemText primary='CFS: Seal Takma, Seal Kırma ve CFS işlem sayılarının eşit olmasını kontrol eder.' />
                            <LinearProgress color='info' value={100} sx={{ height: 5 }} variant='determinate' />
                            </Box>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <CustomAvatar skin='light' variant='rounded' sx={{ height: 36, width: 36 }}>
                                <Icon icon='pixelarticons:ship' />
                            </CustomAvatar>
                            </ListItemAvatar>
                            <Box sx={{ width: '100%' }}>
                            <ListItemText primary='One: Bir konteynerde 1 kereden fazla olmaması gereken işlemleri kontrol eder.' />
                            <LinearProgress value={100} sx={{ height: 5 }} variant='determinate' />
                            </Box>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <CustomAvatar skin='light' variant='rounded' color='success' sx={{ height: 36, width: 36 }}>
                                <Icon icon='mdi:ship-wheel' />
                            </CustomAvatar>
                            </ListItemAvatar>
                            <Box sx={{ width: '100%' }}>
                            <ListItemText primary='ISPS: Nakliye, ISPS ve Kilit Açma / Kapama işlemlerinin sayısının eşit olmasını kontrol eder.' />
                            <LinearProgress color='success' value={100} sx={{ height: 5 }} variant='determinate' />
                            </Box>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <CustomAvatar skin='light' variant='rounded' color='error' sx={{ height: 36, width: 36 }}>
                                <Icon icon='streamline:travel-places-anchor-anchor-marina-harbor-port' />
                            </CustomAvatar>
                            </ListItemAvatar>
                            <Box sx={{ width: '100%' }}>
                            <ListItemText primary='Ardiye: Ardiye sayısının ardiye gerektiren işlem sayısı kadar olduğunu kontrol eder.' />
                            <LinearProgress color='error' value={100} sx={{ height: 5 }} variant='determinate' />
                            </Box>
                        </ListItem>
                    </StyledList>
                </ScrollBar>
            </Grid>
            {/* <Grid item xs={6} sm={6}>
                            <Card sx={{color: "black"}}>
                                <Grid container>
                                    <StyledGrid item xs={12}>
                                        <CardContent sx={{ height: '100%', '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
                                            <Typography variant='h6'>Yard A</Typography>
                                            <ReactApexcharts 
                                              type='bar' height={282} series={yardASeries} 
                                              options={createApexColumnChartOptions(["A1", "A2", "A3", "A4", "A5", "A6"], [theme.palette.primary.main])} 
                                            />
                                        </CardContent>
                                    </StyledGrid>
                                </Grid>
                            </Card>
                        </Grid> */}
          </Grid>
        </DialogContent>
        <DialogActions sx={{ pb: { xs: 8, sm: 12.5 }, justifyContent: 'center' }}>
          <Button variant='contained' sx={{ mr: 1 }} onClick={updateSimulationConfiguration}>
            Update
          </Button>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SimulationConfigurationDialog
