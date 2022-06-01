import { Component, OnInit } from '@angular/core';
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
  
  
  constructor(private ds:DataService ) { }

  ngOnInit(): void {
  }

 Deposit(){
   var acno=this.acno
   var pswd=this.pswd
   var amount=this.amount

   const result = this.ds.Deposit(acno,pswd,amount)
  if(result){
    alert(amount+"depositted successfully and new balance is : "+result)
  }
 
  }

 withdrawal(){
  var acno=this.acno1
  var pswd=this.pswd1
  var amount=this.amount1

  const result = this.ds.withdrawal(acno,pswd,amount)
 if(result){
   alert(amount+"debit successfully and new balance is : "+result)
 }
}
}