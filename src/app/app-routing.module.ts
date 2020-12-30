import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OrganizationComponent } from './organization/organization.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermittedComponent } from './permitted/permitted.component';

const routes: Routes = [
  {path: "home", component: HomeComponent },
  {path: "", redirectTo:"home", pathMatch:"full"},
  {path: "about", component : AboutComponent},
  {path: "contact", component : ContactComponent},
  {path: "login", component : LoginComponent},
  {path: "organizations", component : OrganizationComponent},
  {path: "permitted", component : PermittedComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
