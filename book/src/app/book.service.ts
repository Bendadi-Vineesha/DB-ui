import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
import { Router } from '@angular/router';
import { Subscribebook } from './subscribebook';
import { Subscription } from './subscription';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 //private baseUrl ="http://ctsjava856.iiht.tech:8083/reader";
  
  private baseUrl ="http://13.233.110.29:9090/reader";

  
  constructor(private httpclient: HttpClient,private router:Router) { }

  getBooksList():Observable<Book[]>{
  //  return this.httpclient.get<Book[]>(this.baseUrl+"/"+"getAllBooks");
   return this.httpclient.get<Book[]>(`${this.baseUrl}/getAllBooks`)
}

getBooksByTitle(title:string):Observable<Book[]>{
  //this.router.navigate(["reader/by-title",title])
  console.log("======",title);
  return this.httpclient.get<Book[]>(`${this.baseUrl}/titlename?title=${title}`)
}
getBooksByPrice(price:any):Observable<Book[]>{
  return this.httpclient.get<Book[]>(`${this.baseUrl}/by-price?price=${price}`)
}
getBookByCategory(category:string):Observable<Book[]>{
  return this.httpclient.get<Book[]>(`${this.baseUrl}/by-category?category=${category}`)
}
getBookByAuthor(author:string):Observable<Book[]>{
  return this.httpclient.get<Book[]>(`${this.baseUrl}/by-author?author=${author}`)
}
getBookByPublisher(publisher:string):Observable<Book[]>{
  return this.httpclient.get<Book[]>(`${this.baseUrl}/by-publisher?publisher=${publisher}`)
}
saveSubscribeBook(subscribebook:any){
  return this.httpclient.post(`${this.baseUrl}/save/subscribebooks`,subscribebook)
}

saveSubscribeBooksByReader(subscriberName:string,subscriberEmail:string,book_id:any):any{
return this.httpclient.get<Subscription[]>(`${this.baseUrl}/subscribe/${subscriberName}/${subscriberEmail}/${book_id}`)
}
getSubscribeBooksOfReader(subscriberEmail:string):Observable<Book[]>{
  return this.httpclient.get<Book[]>(`${this.baseUrl}/subscribedBook/${subscriberEmail}`)
}
UnsubscribeBookByReader(book_id:any,subscriberEmail:string):Observable<any>{
  return this.httpclient.delete(`${this.baseUrl}/deleteBookBySubIdAndEmail/${book_id}/${subscriberEmail}`)
}
}


