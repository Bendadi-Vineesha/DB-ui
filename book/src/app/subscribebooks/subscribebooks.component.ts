import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Subscribebook } from '../subscribebook';

@Component({
  selector: 'app-subscribebooks',
  templateUrl: './subscribebooks.component.html',
  styleUrls: ['./subscribebooks.component.css']
})
export class SubscribebooksComponent implements OnInit {
  flag:boolean=false;
subscribe={
  id:'',
  title: '',
  category: '',
  publisher: '',
  publishedDate:'',
  isActive:'',
  isBlocked:'',
  Content:'',
  message:'',
  emailAddress:'',
  price:''

}
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

 

  subscribedbooks(title1:string){
 //   this.title=subscribebook.title;
 this.subscribe.title= title1
 this.bookService.saveSubscribeBook(this.subscribe).subscribe({
   next:(res:any)=>{
     this.flag=true;
     console.log("saved subscribed book sucessfully")
     console.log(res);

   },
   error: (err:any)=>{
    console.log("failed to save subscribed book")
    console.log(err)
}
 })
  }

}
