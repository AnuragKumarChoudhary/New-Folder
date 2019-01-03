import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { CustomerRegistrationComponent } from '../app/customer-registration/customer-registration.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './common/about-us/about-us.component';
import { ContactUsComponent } from './common/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customer-registration', component: CustomerRegistrationComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  CustomerRegistrationComponent
]