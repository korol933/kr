import { Status } from '../const.js';

export default class TaskModel {
  constructor(tasks) {
    this._tasks = tasks;
  }

  getTasks() {
    return this._tasks;
  }

  getTasksByStatus(status) {
    return this._tasks.filter(task => task.status === status);
  }
}