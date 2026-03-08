import { Component } from '@angular/core';
import { BaseDivComponent } from '../shared/base-div/base-div.component';
import { TasksComponent } from '../shared/tasks/tasks.component';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BaseDivComponent, TasksComponent, NewTaskComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  addingTask = false;

  onStartAddTask() {
    this.addingTask = true;
  }

  onCancel() {
    this.addingTask = false;
  }
}
