import { Component, EventEmitter, inject, Output } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  constructor(private tasksService: TasksService) {}
  @Output() cancel = new EventEmitter<void>();
  @Output() cancelEdit = new EventEmitter<void>();

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    dueDate: new FormControl(new Date()),
    priority: new FormControl<'Low' | 'Medium' | 'High'>('Low'),
  });

  onSubmit() {
    if (this.form.value.title) {
      this.tasksService.addTask(
        this.form.value.title,
        this.form.value.description!,
        this.form.value.dueDate!,
        this.form.value.priority!,
      );
      this.form.reset();
      this.cancel.emit();
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  onCancelEdit() {
    this.cancelEdit.emit();
  }
}
