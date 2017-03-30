import { Component, OnInit } from '@angular/core';

import { Rating }                from './rating';
import { RatingService }         from './rating.service';
import { BookService }         from '../create-book/book.service';

import { Book } from '../create-book/book';
import { User } from '../create-user/user';


@Component({
  selector: 'app-rating-book',
  templateUrl: './rating-book.component.html',
  styleUrls: ['./rating-book.component.css']
})
export class RatingBookComponent implements OnInit {

  book: Book;
  books: Book[];
  user: User;

  public max: number = 10;
  public rate: number = 0;
  public isReadonly: boolean = false;

  constructor(private ratingService: RatingService, private bookService: BookService) { 
  	this.book = new Book();
  	this.user = new User();
    this.books = [];
  }

  ngOnInit() {
  }

  searchBook(): void {
    this.bookService
        .getBookName(this.book.book_title)
        .then(books => {
          this.books = books;
        });
  }

  searchBookID(): void {
    this.bookService
        .getBook(this.book.book_id)
        .then(book => {
          console.log(book);
          this.books.push(book);
        });
  }

  addRating(book: Book) : void {
    console.log(book);
    this.ratingService.add(this.user.user_id, book.isbn, this.rate)
      .then(rating => {
        console.log(rating);
        if(rating.isbn){
          alert("Calificado");
        }
      });
  }

}
