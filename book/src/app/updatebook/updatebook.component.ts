import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
 
  data={
    author:'',
    title:'',
    publisher:'',
    publishedDate:'',
    isBlocked:'',
    content:'',
    emailAddress:'',
    price:'',
    category:''
    }
  id:any;
  bookauthor:any[]=[];
  bookauthor1:any;
  flag:boolean=false;
  message:boolean=false;

  constructor(private bookService:BookService,private authorservice:RegisterService,
    private route:Router
    ) { }

  ngOnInit(): void {
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
updateBook(){
  this.authorservice.updateBook(this.id,this.data).subscribe({
    next: (res:any)=>{
      this.message=true
      console.log(this.message)
      console.log("updated book sucessfully")
      console.log(res);
      this.bookauthor1=res;
    
     // this.bookauthorresults=res;
  },
  error: (err:any)=>{
    //  console.log("failed to update book")
      console.log(err)
  }
  })
 
  }

  updateBookByAuthor(id:any){
    console.log(id)
    this.flag=true;
    this.id=id;
    console.log(this.id)
  }
}


