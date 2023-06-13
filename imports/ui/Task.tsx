import React from 'react';
import { TTask } from '../api/TasksCollection';

export const Task = ({ task } : { task: TTask }) => {
  return <li>{task.text}</li>
};