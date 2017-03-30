import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { apipaths } from '../app.apis';
import { Rating } from './rating';

@Injectable()
export class RatingService {

	private headers = new Headers({'Content-Type': 'application/json'});
  	//private ratingUrl = 'api/ratings';  // URL to web api
    private ratingUrl = apipaths.url + 'ratings';  // URL to web api

  constructor(private http: Http) { }

  add(user_id: number, isbn: string, book_rating: number): Promise<Rating> {
    return this.http
      .post(this.ratingUrl + '/', JSON.stringify({user_id: user_id, isbn: isbn, book_rating: book_rating}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
