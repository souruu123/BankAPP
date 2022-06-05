import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  acno=""
  pswd=""
  amount=""

  acno1=""
  pswd1=""
  amount1=""
//dependancy injection

  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  withdrawalForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })


  //dependancy injection
  
  constructor(private ds:DataService, private fb:FormBuilder  ) { }

  ngOnInit(): void {
  }

 Deposit(){
   var acno=this.depositForm.value.acno
   var pswd=this.depositForm.value.pswd
   var amount=this.depositForm.value.amount


   const result = this.ds.Deposit(acno,pswd,amount)
  if(result){
    alert(amount+"depositted successfully and new balance is : "+result)
  }
 
  }
  

 withdrawal(){
  var acno=this.depositForm.value.acno1
   var pswd=this.depositForm.value.pswd1
   var amount=this.depositForm.value.amount1

  const result = this.ds.withdrawal(acno,pswd,amount)
 if(result){
   alert(amount+"debit successfully and new balance is : "+result)
 }
}
}