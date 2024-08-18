import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompartimentPageComponent } from './pages/compartiment-page/compartiment-page.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsComponent } from './pages/products/products.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  //   { path: '', redirectTo: 'admin/users', pathMatch: 'full' },
  //   { path: 'admin/users', component: AdminHomeComponent },
  //   { path: 'user/:id/tasks', component: UserHomeComponent },
  //   {path: 'user/addtask', component:TaskFormComponent}
  // { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'compartiment', component: CompartimentPageComponent },
  { path: 'employee', component: EmployeesComponent },
  { path: 'category', component: CategoriesComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'dashboard', component: DashboardComponent },
];
