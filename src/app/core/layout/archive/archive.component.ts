import { Component, Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BaseDivComponent } from '../../../ui-wrappers/base-div/base-div.component';
import { TopBarComponent } from '../../../shared/components/top-bar/top-bar.component';
import { TasksService } from '../../../shared/components/tasks/tasks.service';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [BaseDivComponent, DatePipe, TopBarComponent],
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
