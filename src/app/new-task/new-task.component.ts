import { Component } from '@angular/core';
import { TasksService } from '../shared/tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  constructor(private tasksService: TasksService) {}
}
