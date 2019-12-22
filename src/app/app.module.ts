import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './application/login/login.component';
import { DashboardComponent } from './application/dashboard/dashboard.component';

// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthGuard } from './guards/auth.guard';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { NavbarComponent } from './application/components/navbar/navbar.component';
import { SidebarComponent } from './application/components/sidebar/sidebar.component';
import { StaffListComponent } from './application/staff/staff-list/staff-list.component';
import { StaffLawyerAddComponent } from './application/staff/staff-lawyer-add/staff-lawyer-add.component';
import { StaffLawyerEditComponent } from './application/staff/staff-lawyer-edit/staff-lawyer-edit.component';
import { StaffClerkAddComponent } from './application/staff/staff-clerk-add/staff-clerk-add.component';
import { StaffClerkEditComponent } from './application/staff/staff-clerk-edit/staff-clerk-edit.component'
import { StaffService } from './services/staff.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    StaffListComponent,
    StaffLawyerAddComponent,
    StaffLawyerEditComponent,
    StaffClerkAddComponent,
    StaffClerkEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    StaffService,
    // providers used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
