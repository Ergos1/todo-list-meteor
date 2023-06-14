import React, { useState } from 'react'
import { TasksCollection } from '../api/TasksCollection'

export const TaskForm = (): React.JSX.Element => {
    const [text, setText] = useState('')

    const handleSubmit = (e: any): void => {
        e.preventDefault()

        if (text === '') return

        TasksCollection.insert({ text, date: new Date(), isChecked: false })

        setText('')
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Type to add new tasks"
                value={text}
                onChange={(e) => {
                    setText(e.target.value)
                }}
            />

            <button type="submit">Add Task</button>
        </form>
    )
}
