import React from 'react'
import { type TTask } from '../api/TasksCollection'

export const Task = ({ task, onCheckboxClick, onDeleteClick }: { task: TTask, onCheckboxClick: (task: TTask) => void, onDeleteClick: (task: TTask) => void }): React.JSX.Element => {
    return <li className='task'>
        <input
            type='checkbox'
            checked={task.isChecked}
            onClick={() => { onCheckboxClick(task) }}
            readOnly
        />
        <span>{task.text}</span>
        <button onClick={() => { onDeleteClick(task) }}>&times;</button>
    </li>
}
