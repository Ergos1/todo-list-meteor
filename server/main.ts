import { Meteor } from 'meteor/meteor'
import { TasksCollection, type TTask } from '/imports/api/TasksCollection'

export const insertTask = (task: TTask): string => TasksCollection.insert(task)

Meteor.startup(async () => {
  TasksCollection.allow({
    insert () {
      return true
    }
  })
})

Meteor.publish('tasks', function () {
  return TasksCollection.find()
})
