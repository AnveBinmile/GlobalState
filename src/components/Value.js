import React, { useContext } from 'react'
import { TodoCollection } from './TodoCollection'

export default function Value() {
    const {text} = useContext(TodoCollection)
  return (
    <div>{text}</div>
  )
}
