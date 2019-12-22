import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './application/login/login.component';
import { DashboardComponent } from './application/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { StaffListComponent } from './application/staff/staff-list/staff-list.component';
import { StaffLawyerAddComponent } from './application/staff/staff-lawyer-add/staff-lawyer-add.component';
import { StaffLawyerEditComponent } from './application/staff/staff-lawyer-edit/staff-lawyer-edit.component';
import { StaffClerkAddComponent } from './application/staff/staff-clerk-add/staff-clerk-add.component';
import { StaffClerkEditComponent } from './application/staff/staff-clerk-edit/staff-clerk-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: 'staff', children: [
      { path: '', component: StaffListComponent, canActivate: [AuthGuard] },
      { path: 'lawyer-add', component: StaffLawyerAddComponent, canActivate: [AuthGuard] },
      { path: 'lawyer-edit', component: StaffLawyerEditComponent, canActivate: [AuthGuard] },
      { path: 'clerk-add', component: StaffClerkAddComponent, canActivate: [AuthGuard] },
      { path: 'clerk-edit', component: StaffClerkEditComponent, canActivate: [AuthGuard] },
    ],
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
