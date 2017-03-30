import { Component, OnInit } from '@angular/core';
import { BookService }         from './book.service';

import { Book }  from './book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

	book: Book;

  constructor(private bookService: BookService) { 
  	this.book = new Book();
  }

  ngOnInit() {
  }

  addBook(book : Book): void {
    
    this.bookService.create(book)
      .then(book => {
        alert("Libro Creado: \nISBN: " + book.isbn + "\nNombre: " + book.book_title);        
      });
  }

  onSubmit() {
  	this.addBook(this.book);
  }

}
