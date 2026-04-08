import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseDivComponent } from '../../../ui-wrappers/base-div/base-div.component';
import { EditTaskComponent } from '../../../shared/components/edit-task/edit-task.component';
import { NewTaskComponent } from '../../../shared/components/new-task/new-task.component';
import { TasksComponent } from '../../../shared/components/tasks/tasks.component';
import { TasksService } from '../../../shared/components/tasks/tasks.service';
import { TopBarComponent } from '../../../shared/components/top-bar/top-bar.component';
import { Task } from '../../../shared/models/tasks.model';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    BaseDivComponent,
    TasksComponent,
    NewTaskComponent,
    EditTaskComponent,
    FormsModule,
    TopBarComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  addingTask = false;
  editingTask = false;
  selectedTask: Task | null = null;
  sortingValue = 'None';
  filteringValue = 'None';

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService.sortTasksByDueDate('None');
    this.tasksService.filterByPriority('None');
  }

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

  onSortingChange() {
    if (this.sortingValue === 'Ascendent') {
      this.tasksService.sortTasksByDueDate('Ascendent');
    } else if (this.sortingValue === 'Descendent') {
      this.tasksService.sortTasksByDueDate('Descendent');
    } else {
      this.tasksService.sortTasksByDueDate('None');
    }
  }

  onFilteringChange() {
    this.tasksService.filterByPriority(this.filteringValue);
  }
}
