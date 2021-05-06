import { CreateCustomerDeductionbarodaComponent } from './customers/section80c-deduction/create-customer-deduction-baroda/create-customer-deductionbaroda.component';
import { CreateCustomerDeductionhdfcComponent } from './customers/section80c-deduction/create-customer-deduction-hdfc/create-customer-deductionhdfc.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// Reactive For
import {AngularFireStorageModule} from '@angular/fire/storage';


import { ReactiveFormsModule,FormsModule} from '@angular/forms';
// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import {recomComponent} from './components/recom-form/recom-form.component';
import {Section80CComponent} from './components/section-80c/section-80c.component'
import {MatSelectModule} from '@angular/material/select';


// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./shared/services/auth.service";

import { EmployeeProfilesComponent } from './components/employee-profiles/employee-profiles.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CreateCustomer80DComponent } from './customers-80d/create-customer80d/create-customer80d.component';
import { CustomersList80DComponent } from './customers-80d/customers-list80d/customers-list80d.component';
import {CustomerDetails80DComponent} from './customers-80d/customer-details80d/customer-details80d.component';
import { TaxComponent } from './customers/tax/tax.component';
import { FormComponent } from './components/form/form.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { SectionComponent } from './components/section/section.component';
import { Section80CCDComponent } from './components/section80-ccd/section80-ccd.component';
import { SectionDComponent } from './components/section-d/section-d.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import {CreateCustomer80CCDComponent} from './customers-80ccd/create-customer80ccd/create-customer80ccd.component';
import {CustomerDetails80CCDComponent} from './customers-80ccd/customer-details80ccd/customer-details80ccd.component';
import {CustomersList80CCDComponent} from './customers-80ccd/customers-list80ccd/customers-list80ccd.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {HelpComponent} from './components/Help/Help/help.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import {CreateCustomerDeductionComponent} from './customers/section80c-deduction/create-customer-deduction/create-customer-deduction.component';
import {CustomerDetailsDeductionComponent} from './customers/section80c-deduction/customer-details-deduction/customer-details-deduction.component';
import {CustomersListDeductionComponent} from './customers/section80c-deduction/customers-list-deduction/customers-list-deduction.component';
// import { FormProfileListComponent } from './forms/form-profile-list/form-profile-list.component';
// import { FormsProfileComponent } from './forms/form-profile/forms-profile.component';
// import { FormsComponent } from './forms/forms/forms.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    EmployeeProfilesComponent,
    CompanyPageComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent,
    TaxComponent,
    FormComponent,
    UserprofileComponent,
    SectionComponent,
    Section80CCDComponent,
    recomComponent,
    Section80CComponent,
    SectionDComponent,
    DropdownComponent,
    CustomersList80DComponent,
    CreateCustomer80DComponent,
    CustomerDetails80DComponent,
    CreateCustomer80CCDComponent,
    CustomerDetails80CCDComponent,
    CustomersList80CCDComponent,
    AboutUsComponent,
    HelpComponent,
    ServicesPageComponent,
    CreateCustomerDeductionComponent,
    CustomerDetailsDeductionComponent,
    CustomersListDeductionComponent,
    // FormsComponent,
    // FormsProfileComponent,
  //  FormProfileListComponent,
   ContactFormComponent,
   CreateCustomerDeductionhdfcComponent,
   CreateCustomerDeductionbarodaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule,
    MatSelectModule,
    CommonModule,
    NgbModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
