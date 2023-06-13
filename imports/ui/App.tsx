import React, { useState } from "react";
import { TTask, TasksCollection } from "/imports/api/TasksCollection";
import { Task } from "./Task";
import { TaskForm } from "./TaskForm";
import { Meteor } from "meteor/meteor";

export const App = () => {
    const [tasks, setTasks] = useState<TTask[]>([]);

    Meteor.subscribe('tasks', ()=> {
        setTasks(TasksCollection.find({}, {sort: {date: -1}}).fetch());
    });

    return (
        <div>
            <h1>Welcome to Meteor!</h1>

            <TaskForm/>

            <ul>
                {tasks.map((task, index) => (
                    <Task key={index} task={task} />
                ))}
            </ul>
        </div>
    );
};
