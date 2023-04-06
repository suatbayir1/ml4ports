import dateFormat, { masks } from 'dateformat'

export const dateToLocaleDateString = (date: Date) => {
  return dateFormat(date, 'dddd, mmmm dS, yyyy, h:MM:ss TT')
}
