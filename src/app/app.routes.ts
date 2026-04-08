import { Routes } from '@angular/router';
import { AuthComponent } from './core/auth/auth.component';
import { ArchiveComponent } from './core/layout/archive/archive.component';
import { MainComponent } from './core/layout/main/main.component';
import { NotfoundComponent } from './core/layout/notfound/notfound.component';

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
