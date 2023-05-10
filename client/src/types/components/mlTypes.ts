export type MLModelType = {
  modelName: string
  trainer: string
  trainDate: Date
  accuracy: number
  period: number
  algorithm: string
  input: string
  output: string
  modelType: string
  metrics: Object[]
  subModels?: Object[]
  _id?: string
}
