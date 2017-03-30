import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { apipaths } from '../app.apis';

import { User } from './user';

@Injectable()
export class UserService {

	private headers = new Headers({'Content-Type': 'application/json'});
  	//private userUrl = 'api/users';  // URL to web api
  	private userUrl = apipaths.url + 'users';  // URL to web api

  constructor(private http: Http) { }

  getUsers(): Promise<User[]> {
    return this.http.get(this.userUrl)
               .toPromise()
               .then(response => response.json() as User[])
               .catch(this.handleError);
  }

  getUser(id: number): Promise<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get(url + '.json')
               .toPromise()
               .then(response => response.json() as User)
               .catch(this.handleError);
  }

  create(location: string, age: number): Promise<User> {
    return this.http
      .post(this.userUrl+'/', JSON.stringify({location: location, age: age}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
