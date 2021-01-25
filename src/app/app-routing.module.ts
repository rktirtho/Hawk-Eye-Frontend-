import { UnauthrizedAccessComponent } from './unauthrized-access/unauthrized-access.component';
import { AuthorizedAccessComponent } from './authorized-access/authorized-access.component';
import { YesterdayAccessComponent } from './yesterday-access/yesterday-access.component';
import { TodayAccessComponent } from './today-access/today-access.component';
import { StrangerComponent } from './stranger/stranger.component';
import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { SecurityOfficerComponent } from './security-officer/security-officer.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OrganizationComponent } from './organization/organization.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermittedComponent } from './permitted/permitted.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      { path: "organizations", component: OrganizationComponent },
      { path: "securities", component: SecurityOfficerComponent },
      { path: "strangers", component: StrangerComponent },
      { path: "permitted", component: PermittedComponent },
      { path: "today-access", component: TodayAccessComponent },
      { path: "yesterday-access", component: YesterdayAccessComponent },
      { path: "authorized-access", component: AuthorizedAccessComponent },
      { path: "unauthorized-access", component: UnauthrizedAccessComponent },
      { path: "visitors", component: StrangerComponent }
    ]
  },
  { path: "recover-account", component: RecoverAccountComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
