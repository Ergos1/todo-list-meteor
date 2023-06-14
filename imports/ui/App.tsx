import React, { useState } from 'react'
import { type TTask, TasksCollection } from '/imports/api/TasksCollection'
import { Task } from './Task'
import { TaskForm } from './TaskForm'
import { Meteor } from 'meteor/meteor'

export const App = (): React.JSX.Element => {
    const [tasks, setTasks] = useState<TTask[]>([])

    const toggleCheckedTask = ({ _id, isChecked }: TTask): void => {
        TasksCollection.update(_id, {
            $set: {
                isChecked: !isChecked
            }
        })
    }

    const deleteTask = ({ _id }: TTask): void => {
        TasksCollection.remove(_id)
    }

    Meteor.subscribe('tasks', () => {
        setTasks(TasksCollection.find({}, { sort: { date: -1 } }).fetch())
    })

    return (
        <div>
            <h1>Welcome to Meteor!</h1>

            <TaskForm />

            <ul>
                {tasks.map((task, index) => (
                    <Task key={index} task={task} onCheckboxClicked={toggleCheckedTask} onDeleteClicked={deleteTask} />
                ))}
            </ul>
        </div>
    )
}
