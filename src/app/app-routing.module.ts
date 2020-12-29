import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OrganizationComponent } from './organization/organization.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "home", component: HomeComponent },
  {path: "", redirectTo:"home", pathMatch:"full"},
  {path: "about", component : AboutComponent},
  {path: "contact", component : ContactComponent},
  {path: "login", component : LoginComponent},
  {path: "organizations", component : OrganizationComponent}
];

// const routes: Routes = [
  
//   {path : "home", component : HomeComponent},
//   {path : "", redirectTo:"home", pathMatch : "full"},
//   {path : "about", component: AboutComponent},
//   // {path : "experiance", component: EducationComponent},
//   {path : "education", component: EducationComponent},
//   {path : "training", component: EducationComponent},
//   {path : "projects", component: ProjectsComponent},
//   {path : "skills", component: SkillsComponent},
//   {path : "experiance", component: EducationComponent},
//   {path : "contact", component: ContactComponent},

  
  
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
