import { Meteor } from 'meteor/meteor'
import { TasksCollection, type TTask } from '/imports/api/TasksCollection'

export const insertTask = (task: TTask): string => TasksCollection.insert(task)

Meteor.startup(async () => {
    TasksCollection.allow({
        insert () {
            return true
        },
        update () {
            return true
        },
        remove () {
            return true
        }
    })
})

Meteor.publish('tasks', function (hideCompleted: boolean) {
    const tasks = TasksCollection.find(hideCompleted ? { isChecked: { $eq: false } } : {})
    return tasks
})
