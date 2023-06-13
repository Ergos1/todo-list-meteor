import { Meteor } from "meteor/meteor";
import { TasksCollection, TTask } from "/imports/api/TasksCollection";

export const insertTask = (task: TTask) => TasksCollection.insert(task);

Meteor.startup(async () => {
    TasksCollection.allow({insert() {
        return true;
    },})
    return;
});

Meteor.publish("tasks", function () {
    return TasksCollection.find();
});
