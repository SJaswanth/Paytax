import { Component, OnInit } from '@angular/core';


import { Customer } from '../../customer';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-create-customer-deductionhdfc',
  templateUrl: './create-customer-deductionhdfc.component.html',
  styleUrls: ['./create-customer-deductionhdfc.component.css']
})
export class CreateCustomerDeductionhdfcComponent implements OnInit {


  customer: Customer = new Customer();
  submitted = false;
  // countries: string[] = ['UPSTOCKS', 'MORE-INVEST', 'MONEY-WAY'];
  default: string = '';
  alert : boolean = false
  warn: boolean=true
  res:number;



  constructor(private customerService: CustomerService)
  {}

  ngOnInit():void{

    this.customer.LifeInsurancePremium = 30000;
  }


  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.customerService.createCustomer(this.customer);
    this.customer = new Customer();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.alert=true;
    this.warn=false;

  }
  closeAlert(){
    this.alert=true;
  }

  verify(){
    this.res=  parseFloat(this.customer.LifeInsurancePremium)+ parseFloat(this.customer.PublicProvidentFund)  + parseFloat(this.customer.TutionFeeforChildren)+ parseFloat(this.customer.EmployeesProvidentFund) + parseFloat(this.customer.EquityLinkedSavingsScheme) + parseFloat(this.customer.UnitLinkedInsurancePlan) + parseFloat(this.customer.TaxSaverFixedDeposits) + parseFloat(this.customer.NationalPensionScheme) + parseFloat(this.customer.HomeLoanPrincipalRepayment)  + parseFloat(this.customer.SukanyaSamriddhiYojana)  + parseFloat(this.customer.SeniorCitizensSavingsScheme) + parseFloat(this.customer.NationalSavingsCertificate) ;

    if(this.res <= 150000){
      return false;
    }
    else{
      return true;
    }
  }
}



 // let pdfName = 'tax_report';
  //var doc = new jsPDF();
  //doc.text("Hello World", 10, 10);
  //doc.save(pdfName + '.pdf');



