import { Component, inject } from '@angular/core';
import { TasksService } from '../shared/tasks/tasks.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseDivComponent } from '../shared/base-div/base-div.component';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ReactiveFormsModule, BaseDivComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  constructor(private tasksService: TasksService) {}
  private router = inject(Router);

  form = new FormGroup({
    title: new FormControl(''),
  });

  onSubmit() {
    if (this.form.value.title) {
      this.tasksService.addTask(this.form.value.title);
      this.form.reset();
      this.router.navigate(['../tasks'], { replaceUrl: true });
    }
  }
}
