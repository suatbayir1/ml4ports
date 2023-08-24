import dateFormat, { masks } from 'dateformat'
import moment from 'moment'

export const dateToLocaleDateString = (date: Date) => {
  return dateFormat(date, 'dddd, mmmm dS, yyyy, h:MM:ss TT')
}

export const getDateAndTime = (date: Date) => {
  return moment(date).format('DD/MM/YYYY HH:mm:ss')
}

export const addTimesToDate = (date: Date, value: number, type: string): string => {
  return moment(date).add(value, 'hours').format('DD/MM/YYYY HH:mm:ss')
}

export const getShipOperationTime = (date: Date) => {
  return moment(date).format('D MMM | HH:mm') // August 15, 2023 10:20 AM
}
