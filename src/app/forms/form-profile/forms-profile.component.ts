import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";

import {AngularFireStorage} from '@angular/fire/storage'


@Component({
  selector: 'app-profile',
  templateUrl: './forms-profile.component.html',
  styleUrls: ['./forms-profile.component.css']
})
export class FormsProfileComponent implements OnInit {
  customers: any;


  filePath:String="/assets/dummy-user.png";

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private afStorage:AngularFireStorage,
    private customerService: CustomerService
  ) { }
  @Input() customer: Customer;



  urllink:String="/assets/dummy-user.png";

  selectFile(event)
  {
    if(event.target.files)
    {
      var Reader=new FileReader();
      Reader.readAsDataURL(event.target.files[0]);
      Reader.onload=(event:any)=>{
        this.urllink=event.target.result;

      }
    }

  }
  ngOnInit() {
  }
  upload(event) {
    this.filePath = event.target.files[0]
  }
  uploadImage(){
    console.log(this.filePath)
    this.afStorage.upload('/images'+Math.random()+this.filePath, this.filePath);
}


  updateActive(isActive: boolean) {
    this.customerService
      .updateCustomer(this.customer.key, { active: isActive })
      .catch(err => console.log(err));
  }

  deleteCustomer() {
    this.customerService
      .deleteCustomer(this.customer.key)
      .catch(err => console.log(err));
  }

}

