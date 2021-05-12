import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {
isLoggedIn = false;
constructor(private  _authService:AuthService){}
  ngOnInit() :void{

  }
  signOut(){
    this._authService.SignOut();
  }
}

