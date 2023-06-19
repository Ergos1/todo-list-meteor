import React, { useState } from 'react'
import { type TTask, TasksCollection } from '/imports/api/TasksCollection'
import { Task } from './Task'
import { TaskForm } from './TaskForm'
import { useTracker } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'

export const App = (): React.JSX.Element => {
    const [hideCompleted, setHideCompleted] = useState<boolean>(false)

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

    const tasks = useTracker(() => {
        Meteor.subscribe('tasks', hideCompleted)
        return TasksCollection.find({}, { sort: { date: -1 } }).fetch()
    })

    return (
        <div className="app">
            <header>
                <div className="app-bar">
                    <div className="app-header">
                        <h1>📝️ To Do List</h1>
                    </div>
                </div>
            </header>

            <div className="main">
                <TaskForm />
                <div className="filter">
                    <button onClick={() => { setHideCompleted(!hideCompleted) }}>
                        {hideCompleted ? 'Show all' : 'Hide completed'}
                    </button>
                </div>

                <ul className="tasks">
                    {tasks.map((task) => (
                        <Task
                            key={task._id}
                            task={task}
                            onCheckboxClick={toggleCheckedTask}
                            onDeleteClick={deleteTask}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}
