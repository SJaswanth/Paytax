import { CreateCustomerDeductionbarodaComponent } from './../../customers/section80c-deduction/create-customer-deduction-baroda/create-customer-deductionbaroda.component';
import { CreateCustomerDeductionhdfcComponent } from './../../customers/section80c-deduction/create-customer-deduction-hdfc/create-customer-deductionhdfc.component';
import { ServicesPageComponent } from './../../components/services-page/services-page.component';
import { AboutUsComponent } from './../../components/about-us/about-us.component';

import { DropdownComponent } from './../../components/dropdown/dropdown.component';


import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import{FormComponent} from 'src/app/components/form/form.component';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';
import { CreateCustomerComponent } from '../../customers/create-customer/create-customer.component';
import { CustomersListComponent } from '../../customers/customers-list/customers-list.component';
import {CustomersList80DComponent} from '../../customers-80d/customers-list80d/customers-list80d.component'
import {TaxComponent } from '../../customers/tax/tax.component';
import{UserprofileComponent} from '../../components/userprofile/userprofile.component';
import{SectionComponent} from '../../components/section/section.component';
import {recomComponent} from  '../../components/recom-form/recom-form.component';
import { AuthGuard } from "../../shared/guard/auth.guard";
import { EmployeeProfilesComponent } from 'src/app/components/employee-profiles/employee-profiles.component';
import{CompanyPageComponent} from 'src/app/components/company-page/company-page.component';
import {CreateCustomer80DComponent} from '../../customers-80d/create-customer80d/create-customer80d.component';
import { CreateCustomer80CCDComponent } from '../../customers-80ccd/create-customer80ccd/create-customer80ccd.component';
import {CustomersList80CCDComponent} from './../../customers-80ccd/customers-list80ccd/customers-list80ccd.component';
import {HelpComponent} from './../../components/Help/Help/help.component';
import {CreateCustomerDeductionComponent} from '../../customers/section80c-deduction/create-customer-deduction/create-customer-deduction.component';
import {CustomersListDeductionComponent} from '../../customers/section80c-deduction/customers-list-deduction/customers-list-deduction.component';
// import { FormProfileListComponent } from './../../forms/form-profile-list/form-profile-list.component';
// import { FormsComponent } from './../../forms/forms/forms.component';
import {ContactFormComponent} from 'src/app/components/contact-form/contact-form.component';
const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path:'home-page',component:CompanyPageComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {path:'employee-profiles',component:EmployeeProfilesComponent},
  { path: 'reports-c', component: CustomersListComponent },
  { path: 'reports-d', component: CustomersList80DComponent },
  {path:'reports-ccd',component:CustomersList80CCDComponent},
  { path: 'add', component: CreateCustomerComponent },
  { path: 'tax', component: TaxComponent },
  { path: 'register-form', component: FormComponent },
  {path:'profile',component:UserprofileComponent},
  {path:'section',component:SectionComponent},
 {path: 'recom-form',component:recomComponent},
{path:'dropdown',component:DropdownComponent},
{path:'addsection80-d',component:CreateCustomer80DComponent},
{path:'addsection80-ccd',component:CreateCustomer80CCDComponent},
{path:'about-us',component:AboutUsComponent},
{path:'help',component:HelpComponent},
{path:'services',component:ServicesPageComponent},
{path:'add-deduction',component:CreateCustomerDeductionComponent},
{path:'reportc-deduction',component:CustomersListDeductionComponent},
// {path:'forms',component:FormsComponent},
// {path:'user',component:FormProfileListComponent},
{path:'contact-form',component:ContactFormComponent},
{path:'add-deduction-hdfc',component:CreateCustomerDeductionhdfcComponent},
{path:'add-deduction-baroda',component:CreateCustomerDeductionbarodaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
