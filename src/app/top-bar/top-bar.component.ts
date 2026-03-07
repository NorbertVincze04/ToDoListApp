import { Component } from '@angular/core';
import { BaseDivComponent } from '../shared/base-div/base-div.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [BaseDivComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {}
