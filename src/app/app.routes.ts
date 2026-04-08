import { Routes } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import { ArchiveComponent } from './core/archive/archive.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { AuthComponent } from './core/auth/auth.component';

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
  {
    path: 'login',
    component: AuthComponent,
  },
  { path: '**', component: NotfoundComponent },
];
