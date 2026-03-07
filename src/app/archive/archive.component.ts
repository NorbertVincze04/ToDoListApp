import { Component } from '@angular/core';
import { BaseDivComponent } from '../shared/base-div/base-div.component';
import { TasksService } from '../shared/tasks/tasks.service';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [BaseDivComponent],
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
