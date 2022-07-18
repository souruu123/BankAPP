import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
//array to hold all transaction made by given account
  transactions:any
  acno=JSON.parse(localStorage.getItem("currentAcno")||'')


  constructor(private ds:DataService) { 
    //asynchronous
  this.ds.getTransaction(this.acno)
  .subscribe((result:any)=>{
    this.transactions=result.transaction
  },
  (result)=>{
    alert(result.error.message)
  }
  )

   
    console.log(this.transactions);
    
  }

  ngOnInit(): void {
  }




}
