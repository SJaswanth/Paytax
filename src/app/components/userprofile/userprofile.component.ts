import { Customer } from './../../customers-80d/customer';

import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { CustomerService } from '../customer.service';
import {AngularFireStorage} from '@angular/fire/storage'
import { Component, OnInit, NgZone } from '@angular/core';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

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
  filePath:String="/assets/dummy-user.png";
  customers : any;
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private afStorage:AngularFireStorage,
    private customerService: CustomerService
  ) { }



  // getCustomersList() {
  //   this.customerService.getCustomersList().snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c =>
  //         ({ key: c.payload.key, ...c.payload.val() })
  //       )
  //     )
  //   ).subscribe(customers => {
  //     this.customers = customers;
  //   });
  // }


  upload(event) {
    this.filePath = event.target.files[0]
  }
  uploadImage(){
    console.log(this.filePath)
    this.afStorage.upload('/images'+Math.random()+this.filePath, this.filePath);
}
  ngOnInit(): void {
  //   this.getCustomersList();
  }


}
