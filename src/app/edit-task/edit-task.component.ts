import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from '../shared/tasks/tasks.service';
import { Task } from '../shared/tasks/tasks.model';
import { EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() cancelEdit = new EventEmitter<void>();

  constructor(private tasksService: TasksService) {}

  form = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    priority: new FormControl<'low' | 'medium' | 'high'>('low'),
    dueDate: new FormControl(),
  });
  ngOnInit() {
    if (this.task) {
      this.form.patchValue({
        title: this.task.title,
        description: this.task.description,
        priority: this.task.priority,
        dueDate: this.task.dueDate,
      });
    }
  }

  onSubmit() {
    if (this.form.value.title) {
      this.tasksService.updateTask(
        this.task.id,
        this.form.value.title,
        this.form.value.description!,
        this.form.value.priority!,
        this.form.value.dueDate!,
      );
      this.form.reset();
      this.cancelEdit.emit();
    }
  }

  onCancelEdit() {
    this.cancelEdit.emit();
  }
}
