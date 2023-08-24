import React from 'react'
import { Cranes, Trucks, Ships, Operators } from './index'

type Props = {}

const Entities = (props: Props) => {
  return (
    <div>
      <Ships />
      <Cranes />
      <Trucks />
      <Operators />
    </div>
  )
}

export default Entities
