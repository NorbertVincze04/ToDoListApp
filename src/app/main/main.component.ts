import { Component } from '@angular/core';
import { BaseDivComponent } from '../shared/base-div/base-div.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BaseDivComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
