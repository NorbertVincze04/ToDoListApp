import { Component } from '@angular/core';
import { TopBarComponent } from '../../shared/top-bar/top-bar.component';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [TopBarComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css',
})
export class NotfoundComponent {}
