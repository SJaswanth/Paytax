import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
const { jsPDF } = require("jspdf");






@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  alert:boolean=false;
  customer: Customer = new Customer();
  submitted = false;
  warn:boolean=true;
  link:boolean=false;



  countries: string[] = ['MALE', 'FEMALE'];
  default: string = '';

  constructor(private customerService: CustomerService) {

   }

  ngOnInit() {
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
    this.link=true;
  }

closeAlert(){
  this.alert=false
}
}
