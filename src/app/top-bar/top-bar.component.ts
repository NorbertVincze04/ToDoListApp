import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseDivComponent } from '../shared/base-div/base-div.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [BaseDivComponent, RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {}
