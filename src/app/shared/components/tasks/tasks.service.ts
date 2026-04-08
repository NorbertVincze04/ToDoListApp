import { Injectable } from '@angular/core';
import { Task } from '../../models/tasks.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = [];
  private filteredTasks: Task[] = [];
  private currentSort: string = 'None';
  private currentFilter: string = 'None';

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
    this.applyFiltersAndSort();
  }
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private applyFiltersAndSort() {
    let tasks = [...this.tasks];

    if (this.currentFilter !== 'None') {
      tasks = tasks.filter(
        (task) =>
          task.priority.toLowerCase() === this.currentFilter.toLowerCase(),
      );
    }

    if (this.currentSort === 'Ascendent') {
      tasks = tasks.sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1));
    } else if (this.currentSort === 'Descendent') {
      tasks = tasks.sort((a, b) => (a.dueDate < b.dueDate ? 1 : -1));
    }

    this.filteredTasks = tasks;
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
    this.applyFiltersAndSort();
  }

  toggleTaskCompletion(id: string) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.status = task.status === 'pending' ? 'completed' : 'pending';
      this.saveTasks();
      this.applyFiltersAndSort();
    }
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
    this.applyFiltersAndSort();
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

  sortTasksByDueDate(sortingValue: string) {
    this.currentSort = sortingValue;
    this.applyFiltersAndSort();
  }

  filterByPriority(priority: string) {
    this.currentFilter = priority;
    this.applyFiltersAndSort();
  }
}
