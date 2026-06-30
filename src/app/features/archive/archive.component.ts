import { Component, Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TasksService } from '../../core/services/tasks.service';
import { TopBarComponent } from '../../shared/components/top-bar/top-bar.component';
import { BaseDivComponent } from '../../shared/ui-wrappers/base-div/base-div.component';

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
