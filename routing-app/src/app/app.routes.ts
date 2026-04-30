import { Routes } from '@angular/router';
import { Page01 } from './page-01/page-01';
import { Page02 } from './page-02/page-02';
import { Page03 } from './page-03/page-03';
import { todosResolver } from './todos-resolver';
import { Page04 } from './page-04/page-04';
import { authGuard, roleGuard } from './auth-guard';
import { Forbidden } from './forbidden/forbidden';

export const routes: Routes = [
  {path: 'page-01', component: Page01},
  {path: 'forbidden', component: Forbidden},
  // {path: 'page-02', component: Page02},
  {path: 'page-02', loadComponent: () => import('./page-02/page-02').then(m => m.Page02)},
  {path: 'page-03/:firstName', component: Page03},
  {path: 'page-03', redirectTo: 'page-03/default'},
  {
    path: 'page-04',
    component: Page04,
    resolve: {todos: todosResolver},
    canActivate: [authGuard(), roleGuard('app-admin')],
  },
];
