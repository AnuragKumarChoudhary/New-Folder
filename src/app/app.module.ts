import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app.routing.module';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatMenuModule,
  MatIconModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatExpansionModule,
  MatListModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatRadioModule,
  MatCheckboxModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BenefitsComponent } from './common/benefits/benefits.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { AboutUsComponent } from '../app/common/about-us/about-us.component';
import { ContactUsComponent } from '../app/common/contact-us/contact-us.component';
import { MenServicesComponent } from '../app/common/services/men-services/men-services.component';
import { WomenServicesComponent } from '../app/common/services/women-services/women-services.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registrationService } from '../app/services/registrationService';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BenefitsComponent,
    CustomerRegistrationComponent,
    AboutUsComponent,
    ContactUsComponent,
    MenServicesComponent,
    WomenServicesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatSnackBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatRadioModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [registrationService],
  bootstrap: [AppComponent],
  entryComponents: [MenServicesComponent, WomenServicesComponent,CustomerRegistrationComponent]
})
export class AppModule { }
