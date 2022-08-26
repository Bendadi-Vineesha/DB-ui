import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  token1: any

 // private baseUrl ="http://ctsjava856.iiht.tech:8082/author";
  private baseUrl ="http://13.233.110.29:8082/author";

  constructor(private httpclient: HttpClient) { }

  createAuthor(data:any):any{
    //  return this.httpclient.get<Book[]>(this.baseUrl+"/"+"getAllBooks");
    console.log(data);
     return this.httpclient.post(`${this.baseUrl}/createauthor`,data)
  }

  generateToken(data:any):any{
    return this.httpclient.post(`${this.baseUrl}/authenticate`,data)
  }

  createBook(book:any){
    this.token1 = localStorage.getItem('token')
    // this.token1= "Bearer "+this.token1
    let myHeaders:HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append("Content-Type", "application/json");
    myHeaders =myHeaders.append("Accept", "application/json");
   // myHeaders.append('Authorization',this.token1);
   myHeaders = myHeaders.append('Authorization',`Bearer ${this.token1}`)
    return this.httpclient.post(`${this.baseUrl}/createbook`,book,{headers: myHeaders})
  }

  updateBook(id:any,book:any):any{
    this.token1 = localStorage.getItem('token')
    let myHeaders:HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append("Content-Type", "application/json");
    myHeaders =myHeaders.append("Accept", "application/json");
    myHeaders = myHeaders.append('Authorization',`Bearer ${this.token1}`)
   return this.httpclient.put(`${this.baseUrl}/updatebook/${id}`,book,{headers: myHeaders})
  }

  loggedIn(){
  return !!localStorage.getItem('token')
}

}
