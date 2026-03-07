import { Component } from '@angular/core';
import { BaseDivComponent } from '../shared/base-div/base-div.component';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [BaseDivComponent],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css',
})
export class ArchiveComponent {}
