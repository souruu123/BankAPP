import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {






  aim="perfect Banking partner"
  accno="Account number please"
  acno=""
  pswd=""


  loginForm=this.fb.group({


    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })



  //database

//dependency injetction 
  constructor(private router:Router, private ds:DataService,private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

  // //UNSERTIFIED FUNCTION

  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno);

  // }

  // pswdChange(event:any){
  //   this.pswd=event.target.value
  //   console.log(this.pswd);

  // }
login(){
  var acno=this.loginForm.value.acno
  var pswd=this.loginForm.value.pswd

  if(this.loginForm.valid){
    const result = this.ds.login(acno,pswd)

    if(result){
      alert("login successfull")
      this.router.navigateByUrl('dasboard')
    }
 
  }
  else{
    alert("invalid form")
  }





// }



//template reference variable 



// login(a:any,p:any){

//   console.log(a.value);
  

//   var acno=a.value
//   var pswd=p.value
//   let db=this.db

//     if(acno in db){
//       if(pswd == db[acno]["password"]){
//         alert("login successfull")
//       }
//       else{
//         alert("incorrect password")
//       }
//     }
//     else{
//       alert("user does not exist!!!!")
//     }



}



}
