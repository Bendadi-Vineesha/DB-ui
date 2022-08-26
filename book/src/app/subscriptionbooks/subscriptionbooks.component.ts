import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-subscriptionbooks',
  templateUrl: './subscriptionbooks.component.html',
  styleUrls: ['./subscriptionbooks.component.css']
})
export class SubscriptionbooksComponent implements OnInit {
flag:boolean=false;
  data={
    subscriberName:'',
    subscriberEmail:'',
    book_Id:'',
    }
  constructor(private service:BookService) { }

  ngOnInit(): void {
  }

 subscribeBook(){
   console.log(this.data)
  this.service.saveSubscribeBooksByReader(this.data.subscriberName,this.data.subscriberEmail,this.data.book_Id).subscribe({
    next: (res:any)=>{
      this.flag=true;
      console.log(this.flag)
      console.log("saved subscibed books succesfully")
      console.log(res);
     
     },
  error: (err:any)=>{
      console.log("failed to save subscribed book")
      console.log(err)
  }
  })
}

  // saveSubscribeBooks(){

  // }

}
