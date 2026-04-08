import { Component, Pipe } from '@angular/core';
import { BaseDivComponent } from '../../ui-wrappers/base-div/base-div.component';
import { TasksService } from '../../shared/tasks/tasks.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [BaseDivComponent, DatePipe],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css',
})
export class ArchiveComponent {
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
