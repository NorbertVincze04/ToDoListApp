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

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string) {
    const newTask: Task = {
      id: new Date().getTime().toString(),
      title,
      status: 'pending',
    };
    this.tasks.push(newTask);
    this.saveTasks();
  }

  toggleTaskCompletion(id: string) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.status = task.status === 'pending' ? 'completed' : 'pending';
      this.saveTasks();
    }
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }
}
