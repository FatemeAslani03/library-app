import { Routes } from '@angular/router';
import { LoginPage } from './+public/+pages/login-page/login-page';
import { PrivateTemplate } from './+private/private-template/private-template';
import { BooksPage } from './+private/books-page/books-page';
import { MembersPage } from './+private/members-page/members-page';
import { ReportsPage } from './+private/reports-page/reports-page';
import { BorrowsPage } from './+private/borrows-page/borrows-page';
import { DashboardPage } from './+private/dashboard-page/dashboard-page';
import { privateGuard } from './+shared/private-guard';

export const routes: Routes = [
  { path: 'login', component: LoginPage },
  {
    path: 'private',canActivate:[privateGuard],component: PrivateTemplate,children: [
      { path: 'books', component: BooksPage },
      { path: 'members', component: MembersPage },
      { path: 'reports', component: ReportsPage },
      { path: 'borrows', component: BorrowsPage },
      { path: 'dashboard', component: DashboardPage },
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      { path: '*', redirectTo: 'dashboard' },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '*', redirectTo: 'login' },
];
