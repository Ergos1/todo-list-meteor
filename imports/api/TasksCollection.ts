import { Mongo } from 'meteor/mongo'

export interface TTask {
    _id: string
    text: string
    date: Date
    isChecked: boolean
}

export const TasksCollection = new Mongo.Collection<TTask>('tasks')
