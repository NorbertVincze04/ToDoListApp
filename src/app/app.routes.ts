import { Routes } from '@angular/router';
import { ArchiveComponent } from './features/archive/archive.component';
import { MainComponent } from './features/main/main.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ResetPassComponent } from './core/auth/reset-pass/reset-pass.component';
import { TempPassComponent } from './core/auth/temp-pass/temp-pass.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    component: MainComponent,
    canActivate: [AuthGuard],
    data: { showHeader: true },
  },
  {
    path: 'archive',
    component: ArchiveComponent,
    data: { showHeader: true },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { showHeader: false },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { showHeader: false },
  },
  {
    path: 'reset-pass',
    component: ResetPassComponent,
    data: { showHeader: false },
  },
  {
    path: 'temp-pass',
    component: TempPassComponent,
    data: { showHeader: false },
  },
  {
    path: '**',
    component: NotfoundComponent,
    data: { showHeader: false },
  },
];
