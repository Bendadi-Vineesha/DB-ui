import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-getsubscribebooksofreader',
  templateUrl: './getsubscribebooksofreader.component.html',
  styleUrls: ['./getsubscribebooksofreader.component.css']
})
export class GetsubscribebooksofreaderComponent implements OnInit {
  message:boolean=false;
  flag:boolean=false;
  booksubscribed:any[]=[];
  block:string="yes";
  email:any;
  contentOfBook:any;
  data={
    subscriberEmail:'',
    }
    book = {
      id:'',
      title:'',
      category:'',
      publisher:'',
      publishedDate:'',
      is_blocked:'',
      content:'',
      emailAddress:'',
      price:'',
      author:''
  
    }
  constructor(private service:BookService) { }

  ngOnInit(): void {
  }
  getsubscribebooksbyreader(){
    

    this.service.getSubscribeBooksOfReader(this.data.subscriberEmail).subscribe({
    next: (res:any)=>{
      this.email=this.data.subscriberEmail;
      console.log(this.block)
          console.log("fetched subscribed books succesfuly")
          console.log(res);
      
         // this.booksubscribed=res;
          if(res!=null){
            //this.flag=true;
             this.booksubscribed=res;
             let check = this.booksubscribed.map(o => o.isBlocked);
             console.log(check)
            if(this.booksubscribed.length<1)
            this.message=true
            console.log(this.message);
          }
        
         },
      error: (err:any)=>{
          console.log("failed to fetch subscribed book")
          console.log(err)
      }
      })
    
  }

  unsubscribeBook(id:any){
    this.service.UnsubscribeBookByReader(id,this.email).subscribe({
      next: (res:any)=>{
            console.log("unsubscribed succesfully")
            console.log(res);
    },
        error: (err:any)=>{
            console.log("failed to unsubscribe")
            console.log(err)
        }
        })
      
    }
    ReadBook(content:any){
      console.log(content);
      this.contentOfBook=content;
      this.flag=true;
      console.log(this.contentOfBook);
    }
  }
