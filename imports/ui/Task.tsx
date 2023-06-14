import React from 'react'
import { type TTask } from '../api/TasksCollection'

export const Task = ({ task, onCheckboxClicked, onDeleteClicked }: { task: TTask, onCheckboxClicked: (task: TTask) => void, onDeleteClicked: (task: TTask) => void }): React.JSX.Element => {
    return <li className='task'>
        <input
            type='checkbox'
            checked={task.isChecked}
            onClick={() => { onCheckboxClicked(task) }}
            readOnly
        />
        {task.text}
        <button onClick={() => { onDeleteClicked(task) }}>&times;</button>
    </li>
}
