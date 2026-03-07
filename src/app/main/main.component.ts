import { Component } from '@angular/core';
import { BaseDivComponent } from '../shared/base-div/base-div.component';
import { TasksComponent } from '../shared/tasks/tasks.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BaseDivComponent, TasksComponent, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
