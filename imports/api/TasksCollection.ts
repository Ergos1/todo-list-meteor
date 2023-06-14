import { Mongo } from 'meteor/mongo'

export interface TTask {
    text: string
    date: Date
}

export const TasksCollection = new Mongo.Collection<TTask>('tasks')
