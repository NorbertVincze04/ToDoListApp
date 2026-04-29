import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TasksService } from '../../shared/components/tasks/tasks.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  constructor(private users: TasksService) {}
  @Output() cancel = new EventEmitter<void>();

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birthDay: new FormControl(new Date()),
    gender: new FormControl<'Male' | 'Female' | 'Other'>('Male'),
  });

  onSubmit() {
    // if (this.form.value.birthDay) {
    //   this.users.addTask(
    //     this.form.value.firstName!,
    //     this.form.value.lastName!,
    //     this.form.value.dueDate!,
    //     this.form.value.priority!,
    //   );
    //   this.form.reset();
    //   this.cancel.emit();
    // }
  }

  onCancel() {
    this.cancel.emit();
  }

  register() {}
}
