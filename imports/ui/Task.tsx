import React from 'react'
import { type TTask } from '../api/TasksCollection'

export const Task = ({ task }: { task: TTask }): React.JSX.Element => {
  return <li>{task.text}</li>
}
