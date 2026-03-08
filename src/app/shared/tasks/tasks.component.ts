import { Component } from '@angular/core';
import { TasksService } from './tasks.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(private tasksService: TasksService) {}

  get tasks() {
    return this.tasksService.getTasks();
  }

  toggleCompletion(id: string) {
    this.tasksService.toggleTaskCompletion(id);
  }
  deleteTask(id: string) {
    this.tasksService.deleteTask(id);
  }
}
