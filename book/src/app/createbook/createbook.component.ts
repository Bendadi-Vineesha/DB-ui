import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {
  flag:boolean=false;
  message:boolean=false;
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
  constructor(private service:RegisterService) { }

  ngOnInit(): void {
  }
 
  createBook(){
    console.log('=======')
    console.log(this.flag)
    this.service.createBook(this.data).subscribe({
      next: (res:any)=>{
        this.message=true;
        console.log(this.message)
        console.log("book created successfully");
        console.log(res)
    },
    error: (err:any)=>{
      //  console.log("failed to create book")
     //   console.log(err)
    }
    })
  }

  updateBook(){
    
  }
}
