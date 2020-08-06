import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { LoginComponent } from '../login/login.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import {AuthGuardService } from '../Services/auth-guard.service';
import {AppSettings} from '../app-settings';
const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'ForgotPassword', component: ForgotPasswordComponent },
  { path: 'ChangePassword', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'ChangePassword/:Id', component: ChangePasswordComponent },
  {
    path: '',
        component: MainLayoutComponent,
        children: [
{path: 'Home', loadChildren: './home/home.module#HomeModule'},
{path: 'Dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
{path: 'AllRecovery', loadChildren: './all-recovery/all-recovery.module#AllRecoveryModule'},


        ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule], providers: [
    AuthGuardService,
      { provide: 'BASE_URL', useFactory: getBaseUrl }
]
})
export class LayOutRoutingModule { }
export function getBaseUrl() {
  const BASE_URL = AppSettings.Login_URL;
    return BASE_URL;
}
