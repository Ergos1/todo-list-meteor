import React from 'react'
import { type TTask } from '../api/TasksCollection'

export const Task = ({ task, onCheckboxClicked }: { task: TTask, onCheckboxClicked: (task: TTask) => void }): React.JSX.Element => {
    return <li className='task'>
        <input
            type='checkbox'
            checked={task.isChecked}
            onClick={() => { onCheckboxClicked(task) }}
            readOnly
        />
        {task.text}
    </li>
}
