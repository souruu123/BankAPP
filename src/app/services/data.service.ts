import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http:HttpClient) {
    
  }

  login(acno: any, pswd: any) {

   const data={
    acno,
    pswd
   }

   return this.http.post('http://localhost:3000/login',data)

  }

  //register 
  register(username: any, acno: any, password: any) {
  const data={
    username,
    acno,
    password
  }
  return this.http.post('http://localhost:3000/register',data)

  }

  //deposit
  Deposit(acno: any, password: any, amt: any) {
      const data={
      acno, password,amt
    }
    return this.http.post('http://localhost:3000/Deposit'
    ,data,this.getOptions())

  }

  getOptions(){
    const token=localStorage.getItem('token')
    let headers= new HttpHeaders()
    if(token){
     headers= headers.append('x-access-token',token)
     options.headers=headers
    }
    return options
  
  }

  //withdrawal

  withdrawal(acno: any, password: any, amt: any) {
    const data={
      acno, password,amt
    }
    return this.http.post('http://localhost:3000/withdrawal'
    ,data,this.getOptions())
  }

  getTransaction(acno: any) {
    const data={
      acno
    }
    return this.http.post('http://localhost:3000/transaction'
    ,data,this.getOptions())

  }
  deleteAcc(acno:any){
    return this.http.delete('http://localhost:3000/deleteAcc/'+acno,this.getOptions())
  }

}



