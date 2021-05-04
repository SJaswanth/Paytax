import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { map } from 'rxjs/operators';

// import {html2canvas} from 'html2canvas';
import { jsPDF } from "jspdf";
@Component({
  selector: 'app-formprofile-list',
  templateUrl: './form-profile-list.component.html',
  styleUrls: ['./form-profile-list.component.css']
})
export class FormProfileListComponent implements OnInit {

  customers: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomersList();
  }

  getCustomersList() {
    this.customerService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(customers => {
      this.customers = customers;
    });
  }


}
