import { Injectable } from '@angular/core';
import { Task } from './tasks.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = [];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
