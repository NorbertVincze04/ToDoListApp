import { Injectable } from '@angular/core';
import { Task } from './tasks.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = [];
  private filteredTasks: Task[] = [];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    this.filteredTasks = this.tasks;
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasks(): Task[] {
    return this.filteredTasks;
  }

  addTask(
    title: string,
    description: string,
    dueDate: Date,
    priority: 'Low' | 'Medium' | 'High',
  ) {
    const newTask: Task = {
      id: new Date().getTime().toString(),
      title,
      description,
      dueDate,
      priority,
      status: 'pending',
    };
    this.tasks.push(newTask);
    this.saveTasks();
    this.filteredTasks = this.tasks;
  }

  toggleTaskCompletion(id: string) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.status = task.status === 'pending' ? 'completed' : 'pending';
      this.saveTasks();
      this.filteredTasks = this.tasks;
    }
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
    this.filteredTasks = this.tasks;
  }

  getCurrentTasks(id: string) {
    return this.tasks.find((t) => t.id === id);
  }

  updateTask(
    id: string,
    title: string,
    description: string,
    priority: 'Low' | 'Medium' | 'High',
    dueDate: Date,
  ) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.title = title;
      task.description = description;
      task.priority = priority;
      task.dueDate = dueDate;
      this.saveTasks();
    }
  }

  sortAsc() {
    this.filteredTasks = [...this.filteredTasks].sort((a, b) =>
      a.dueDate > b.dueDate ? 1 : -1,
    );
  }

  sortDesc() {
    this.filteredTasks = [...this.filteredTasks].sort((a, b) =>
      a.dueDate < b.dueDate ? 1 : -1,
    );
  }

  filterByPriority(priority: string) {
    if (priority === 'None') {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter(
        (task) => task.priority.toLowerCase() === priority.toLowerCase(),
      );
    }
  }
}
