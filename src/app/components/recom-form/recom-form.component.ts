import { Customer } from './../../customers-80d/customer';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recom-form',
  templateUrl: './recom-form.component.html',
  styleUrls: ['./recom-form.component.css']
})
export class recomComponent {
  currentVal:number;
  income:number;
  TotaltaxableIncome:number;
  deduction:number;
  // deduction1=20000;
  // deduction2=0;
  basicexemption=250000;
  TaxableAmount:number;
  PayableTax:number;

//  getVal(val){

//     this.currentVal=val;
//   }


calculate(){

  if(this.currentVal >= 250000 && this.currentVal < 500000){
    this.deduction=20000;
    this.TotaltaxableIncome=(this.currentVal)-(this.deduction);
    this.TaxableAmount=this.TotaltaxableIncome-this.basicexemption;
    if(this.TotaltaxableIncome>=0 && this.TotaltaxableIncome < 250000){
      this.PayableTax=this.TaxableAmount;
   }
   else if(this.TotaltaxableIncome>=250000 && this.TotaltaxableIncome < 500000){
      this.PayableTax=this.TaxableAmount*(0.05);
   }
   else if(this.TotaltaxableIncome>=500000 && this.TotaltaxableIncome < 750000){
     this.PayableTax=this.TaxableAmount*(0.2);
   }
   else if(this.TotaltaxableIncome>=750000 && this.TotaltaxableIncome < 1000000){
     this.PayableTax=this.TaxableAmount*(0.2);
   }
   else if(this.TotaltaxableIncome>=1000000 && this.TotaltaxableIncome < 1250000){
     this.PayableTax=this.TaxableAmount*(0.3);
   }
   else if(this.TotaltaxableIncome>=1250000 && this.TotaltaxableIncome < 1500000){
     this.PayableTax=this.TaxableAmount*(0.3);
   }
   else if(this.TotaltaxableIncome>=1500000){
     this.PayableTax=this.TaxableAmount*(0.3);
   }
   else if(this.income < 250000){
    this.TotaltaxableIncome=0;
    this.basicexemption=0;
    this.TaxableAmount=0;
    this.PayableTax=0;
   }
  }

  else if(this.currentVal >=500000 && this.currentVal < 750000){
   this.deduction=30000;
   this.TotaltaxableIncome=(this.currentVal)-(this.deduction);
   this.TaxableAmount=this.TotaltaxableIncome-this.basicexemption;
   if(this.TotaltaxableIncome>=0 && this.TotaltaxableIncome < 250000){
     this.PayableTax=this.TaxableAmount;
  }
  else if(this.TotaltaxableIncome>=250000 && this.TotaltaxableIncome < 500000){
     this.PayableTax=this.TaxableAmount*(0.05);
  }
  else if(this.TotaltaxableIncome>=500000 && this.TotaltaxableIncome < 750000){
    this.PayableTax=this.TaxableAmount*(0.2);
  }
  else if(this.TotaltaxableIncome>=750000 && this.TotaltaxableIncome < 1000000){
    this.PayableTax=this.TaxableAmount*(0.2);
  }
  else if(this.TotaltaxableIncome>=1000000 && this.TotaltaxableIncome < 1250000){
    this.PayableTax=this.TaxableAmount*(0.3);
  }
  else if(this.TotaltaxableIncome>=1250000 && this.TotaltaxableIncome < 1500000){
    this.PayableTax=this.TaxableAmount*(0.3);
  }
  else if(this.TotaltaxableIncome>=1500000){
    this.PayableTax=this.TaxableAmount*(0.3);
  }
  else if(this.income < 250000){
    this.TotaltaxableIncome=0;
    this.basicexemption=0;
    this.TaxableAmount=0;
    this.PayableTax=0;
  }

  }
  else if(this.currentVal >=750000 && this.currentVal < 1000000){
    this.deduction=50000;
    this.TotaltaxableIncome=(this.currentVal)-(this.deduction);
    this.TaxableAmount=this.TotaltaxableIncome-this.basicexemption;
    if(this.TotaltaxableIncome>=0 && this.TotaltaxableIncome < 250000){
      this.PayableTax=this.TaxableAmount;
   }
   else if(this.TotaltaxableIncome>=250000 && this.TotaltaxableIncome < 500000){
      this.PayableTax=this.TaxableAmount*(0.05);
   }
   else if(this.TotaltaxableIncome>=500000 && this.TotaltaxableIncome < 750000){
     this.PayableTax=this.TaxableAmount*(0.2);
   }
   else if(this.TotaltaxableIncome>=750000 && this.TotaltaxableIncome < 1000000){
     this.PayableTax=this.TaxableAmount*(0.2);
   }
   else if(this.TotaltaxableIncome>=1000000 && this.TotaltaxableIncome < 1250000){
     this.PayableTax=this.TaxableAmount*(0.3);
   }
   else if(this.TotaltaxableIncome>=1250000 && this.TotaltaxableIncome < 1500000){
     this.PayableTax=this.TaxableAmount*(0.3);
   }
   else if(this.TotaltaxableIncome>=1500000){
     this.PayableTax=this.TaxableAmount*(0.3);
   }
   else if(this.income < 250000){
     this.TotaltaxableIncome=0;
     this.basicexemption=0;
     this.TaxableAmount=0;
     this.PayableTax=0;
   }
  else if(this.income < 250000){
  this.TotaltaxableIncome=0;
  this.basicexemption=0;
  this.TaxableAmount=0;
  this.PayableTax=0;
}


}
}
}

