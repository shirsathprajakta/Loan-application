import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {BankserviceService} from 'src/app/services/bankservice.service';
import { HttpClientModule } from '@angular/common/http';
import {Accountholder} from 'src/app/model/Accountholder';
import {Transaction} from 'src/app/model/Transaction';
import {Observable} from 'rxjs/Observable';
import { $ } from 'protractor';
@Component({
  selector: 'app-ptransactions',
  templateUrl: './ptransactions.component.html',
  styleUrls: ['./ptransactions.component.css']
})
export class PtransactionsComponent implements OnInit {
  submitted:boolean=false;
  printForm:FormGroup;
 print:string[]; 
 pp:string;
 trans:Transaction;
 val:Transaction;
  constructor(private builder11:FormBuilder,private router:Router,private bankservice:BankserviceService) { }




  ngOnInit() {
    this.printForm = this.builder11.group({
      //username:['',Validators.required,Validators.pattern('^[a-z0-9_-]{3,15}$')],
      accountNo: new FormControl('', [
        Validators.required,
      ]),

     
    })
}
public transactions()
{
  // this.submitted=true; 
  // this.bankservice.balance1(this.balForm.value.accno).subscribe(data=>{
  //   console.log(data);
  // //alert("Balance is: "+data);
  // this.bal=data;
  // })
 this.submitted=true;
 this.bankservice.transaction(this.printForm.value.accountNo).subscribe(data=>{
   console.log(data);
   
   this.trans=data;
  // localStorage.setItem(trans,'value');
 })
//this.bankservice.transaction(this.printForm.value.accountNo).subscribe(data=>{
  //console.log(data);
 /// this.trans=data;
  // this.pp=data;
  //var split=pp.split()
  //this.print=data;
  // var arr=this.pp.split(',');
  // console.log(arr);
  
// })

}
}
