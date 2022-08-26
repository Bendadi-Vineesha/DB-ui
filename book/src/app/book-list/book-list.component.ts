import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books : Book[] =[];
  title='';
  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
    this.getBooks();
  }
  private getBooks(){
    this.bookService.getBooksList().subscribe(data =>{
      this.books = data;
    })
  }


  
}
