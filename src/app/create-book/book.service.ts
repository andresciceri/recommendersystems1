import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';

import { apipaths } from '../app.apis';

import { Book } from './book';

@Injectable()
export class BookService {

	private headers = new Headers({'Content-Type': 'application/json'});
  //private bookUrl = 'api/books';  // URL to web api
  private bookUrl = apipaths.url + 'books';  // URL to web api

  constructor(private http: Http) { }

  create(book : Book): Promise<Book> {
    return this.http
      .post(this.bookUrl + '/', JSON.stringify({isbn : book.isbn, book_title : book.book_title, book_author : book.book_author, year_of_publication: book.year_of_publication, publisher : book.publisher, image_url_s : book.image_url_s, image_url_m : book.image_url_m, image_url_l : book.image_url_l }), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  getBook(id: number): Promise<Book> {
    const url = `${this.bookUrl}/${id}`;
    return this.http.get(url + '.json')
               .toPromise()
               .then(response => response.json() as Book)
               .catch(this.handleError);
  }

  getBookISBN(isbn: string): Promise<Book[]> {
    const url = `${this.bookUrl}/?isbn=${isbn}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json() as Book[])
               .catch(this.handleError);
  }

  getBookName(name: string): Promise<Book[]> {
    const url = `${this.bookUrl}/?search=${name}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json() as Book[])
               .catch(this.handleError);
  }

  getBooks(): Promise<Book[]> {
    
    return this.http.get(this.bookUrl)
               .toPromise()
               .then(response => response.json() as Book[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
