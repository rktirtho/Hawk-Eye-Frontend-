import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizationComponent } from './organization/organization.component';
import { PermittedComponent } from './permitted/permitted.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SecurityOfficerComponent } from './security-officer/security-officer.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    PermittedComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SecurityOfficerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
