import { Component } from '@angular/core';
import { TasksService } from '../../../core/services/tasks.service';
import { DatePipe } from '@angular/common';
import { EventEmitter, Output } from '@angular/core';
import { Task } from '../../../core/models/tasks.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(
    private tasksService: TasksService,
    private authService: AuthService,
  ) {}
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

  get userName() {
    return this.authService.currentUser?.fullName;
  }
}
