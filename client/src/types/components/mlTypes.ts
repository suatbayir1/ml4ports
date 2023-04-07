export type MLModelType = {
  modelName: string
  trainer: string
  trainDate: Date
  accuracy: number
  period: number
  input: string
  output: string
  modelType: string
  metrics: {
    accuracy?: string
    f1score?: string
    recal?: string
  }
  subModels?: Object[]
}
