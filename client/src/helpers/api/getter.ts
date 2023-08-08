export const getUrl = (endpoint: string) => {
  return `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`
}

export const getMlUrl = (endpoint: string) => {
  return `${process.env.NEXT_PUBLIC_ML_API_URL}/${endpoint}`
}
