import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  // acno=""
  // pswd=""
  // amount=""

  // acno1=""
  // pswd1=""
  // amount1=""
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

  user:any
  lDate:any
  acno=""

  //dependancy injection
  
  constructor(private ds:DataService, private fb:FormBuilder,private router:Router  ) { 

    this.user=this.ds.currentUser
    this.lDate=new Date()

   }

  ngOnInit(): void {
    if (!localStorage.getItem("currentAcno")) {
      alert("please log in")
      this.router.navigateByUrl("")
    }

  }

 Deposit(){
   var acno=this.depositForm.value.acno
   var pswd=this.depositForm.value.pswd
   var amount=this.depositForm.value.amount

   if (this.depositForm.valid) {
    const result = this.ds.Deposit(acno,pswd,amount)
    if(result){
      alert(amount+"depositted successfully and new balance is : "+result)
    }
   }
   else{
     alert("invalid form")
   }


 
 
  }
  

 withdrawal(){
  var acno=this.withdrawalForm.value.acno
   var pswd=this.withdrawalForm.value.pswd
   var amount=this.withdrawalForm.value.amount

   if (this.withdrawalForm.valid) {
    const result = this.ds.withdrawal(acno,pswd,amount)
    if(result){
      alert(amount+"debit successfully and new balance is : "+result)
    }
   }
   else{
     alert("invalid form")
   }

 
}
logout(){
  localStorage.removeItem("currentUser")
  localStorage.removeItem("currentAcno")

this.router.navigateByUrl("")
}
deleteAccount(){
  this.acno = JSON.parse(localStorage.getItem("currentAcno")||'')
}

cancel(){
  this.acno=""
}

} 


