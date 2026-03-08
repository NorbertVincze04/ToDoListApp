import { Component } from '@angular/core';
import { BaseDivComponent } from '../shared/base-div/base-div.component';
import { TasksComponent } from '../shared/tasks/tasks.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { Task } from '../shared/tasks/tasks.model';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    BaseDivComponent,
    TasksComponent,
    NewTaskComponent,
    EditTaskComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  addingTask = false;
  editingTask = false;
  selectedTask: Task | null = null;

  onStartAddTask() {
    this.addingTask = true;
  }

  onCancel() {
    this.addingTask = false;
  }

  onStartEditTask(task: Task) {
    this.selectedTask = task;
    this.editingTask = true;
  }

  onCancelEdit() {
    this.editingTask = false;
    this.selectedTask = null;
  }
}
