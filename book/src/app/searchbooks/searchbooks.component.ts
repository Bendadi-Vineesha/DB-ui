import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchbooks',
  templateUrl: './searchbooks.component.html',
  styleUrls: ['./searchbooks.component.css']
})
export class SearchbooksComponent implements OnInit {
  books : any;
  booksprice:any[]=[];
  bookcategory:any[]=[];
  bookauthor:any[]=[];
  bookpublisher:any[]=[];
  booktitle:any[]=[];
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
    title:any
    price:any
    category:any
    author:any
    publisher:any
  
  booktitleresults:any;
  bookpriceresults:any;
  bookcategoryresults:any;
  bookauthorresults:any;
  bookpublisherresults:any;
  
  constructor(private bookService:BookService,private router:Router) {
  
   }

  ngOnInit(): void {
    //this.getBookByTitle(this.title)
    
  }
 
getBookByTitle(title:string){
 //this.router.navigate(["reader",title])/reader/by-title/title
 console.log("=====dd",title);
 
  this.bookService.getBooksByTitle(title).subscribe({
      next: (res:any)=>{
          console.log("find books by title is success")
          console.log(res);
          this.booktitle=res;
           this.booktitleresults=res;
          // this.books=res;
      },
      error: (err:any)=>{
          console.log("failed to find books based on title failed")
          console.log(err)
      }
  })
}
getBookByPrice(price:any){
  console.log("=================================================")
  console.log(price)
  this.bookService.getBooksByPrice(price).subscribe({
    next: (res:any)=>{
      console.log("find books by price is success")
      console.log(res);
     // this.books=res;
      this.booksprice=res;
     // this.bookpriceresults=res;
  },
  error: (err:any)=>{
      console.log("failed to find books based on price is failed")
      console.log(err)
  }
  })
}
getBookByCategory(category:string){
  this.bookService.getBookByCategory(category).subscribe({
    next: (res:any)=>{
      console.log("find books by category is success")
      console.log(res);
      this.bookcategory=res;
    //  this.bookcategoryresults=res;
  },
  error: (err:any)=>{
      console.log("failed to find books based on category is failed")
      console.log(err)
  }
  })
}
getBookByAuthor(author:string){
  this.bookService.getBookByAuthor(author).subscribe({
    next: (res:any)=>{
      console.log("find books by author is success")
      console.log(res);
      this.bookauthor=res;
     // this.bookauthorresults=res;
  },
  error: (err:any)=>{
      console.log("failed to find books based on author is failed")
      console.log(err)
  }
  })
}

getBookByPublisher(author:string){
  this.bookService.getBookByPublisher(author).subscribe({
    next: (res:any)=>{
      console.log("find books by publisher is success")
      console.log(res);
      this.bookpublisher=res;
      // this.bookpublisherresults=res;
  },
  error: (err:any)=>{
      console.log("failed to find books based on publisher is failed")
      console.log(err)
  }
  })
}

}
