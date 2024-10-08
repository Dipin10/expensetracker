import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { IncomeExpenseComponent } from '../income-expense/income-expense.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'income-expense', component: IncomeExpenseComponent },
  { path: 'dashboard', component: DashboardComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
