import { Component, OnInit } from '@angular/core';
import { BaseDivComponent } from '../shared/base-div/base-div.component';
import { TasksComponent } from '../shared/tasks/tasks.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { Task } from '../shared/tasks/tasks.model';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../shared/tasks/tasks.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    BaseDivComponent,
    TasksComponent,
    NewTaskComponent,
    EditTaskComponent,
    FormsModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  addingTask = false;
  editingTask = false;
  selectedTask: Task | null = null;
  sortingValue = 'Ascendent';
  filteringValue = 'None';

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService.sortAsc();
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
      this.tasksService.sortAsc();
    } else if (this.sortingValue === 'Descendent') {
      this.tasksService.sortDesc();
    }
  }

  onFilteringChange() {
    this.tasksService.filterByPriority(this.filteringValue);
  }
}
