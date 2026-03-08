import { Component } from '@angular/core';
import { TasksService } from './tasks.service';
import { DatePipe } from '@angular/common';
import { EventEmitter, Output } from '@angular/core';
import { Task } from './tasks.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(private tasksService: TasksService) {}
  @Output() edit = new EventEmitter<Task>();

  get tasks() {
    return this.tasksService.getTasks();
  }

  toggleCompletion(id: string) {
    this.tasksService.toggleTaskCompletion(id);
  }
  deleteTask(id: string) {
    this.tasksService.deleteTask(id);
  }

  editTask(id: string) {
    const task = this.tasksService.getCurrentTasks(id);
    if (task) {
      this.edit.emit(task);
    }
  }
}
