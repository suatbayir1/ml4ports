import React from 'react'
import { Port, Cranes, Trucks, Ships, Operators } from './index'

type Props = {}

const Entities = (props: Props) => {
  return (
    <div>
      <Port />
      <Ships />
      <Cranes />
      <Trucks />
      <Operators />
    </div>
  )
}

export default Entities
