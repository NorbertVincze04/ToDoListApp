import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ArchiveComponent } from './archive/archive.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    component: MainComponent,
  },
  {
    path: 'archive',
    component: ArchiveComponent,
  },
  { path: '**', component: NotfoundComponent },
];
