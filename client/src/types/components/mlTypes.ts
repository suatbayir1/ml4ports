export type ModelInput = {
  name: string
  description: string
}

export type ModelOutput = {
  name: string
  description: string
}

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
  inputs: ModelInput[]
  outputs: ModelOutput[]
  _id?: string
}
