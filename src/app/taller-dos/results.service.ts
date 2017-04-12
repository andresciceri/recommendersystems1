import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { apipaths } from '../app.apis';

import { Business } from './business';


@Injectable()
export class ResultsServiceDos {

	private headers = new Headers({'Content-Type': 'application/json'});
  	
  	private recommendationUrl = apipaths.url + 'recomendaciones_categoria_ciudad';  // URL to web api
  	private businessUrl = apipaths.url + 'consulta_negocio';  // URL to web api

  constructor(private http: Http) { }

  getRecommendation(idUser: string, city: string, tag: string): Promise<any[]> {
    const url = `${this.recommendationUrl}/${idUser}/${city}/${tag}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json() as any[])
               .catch(this.handleError);
  }

  getBusiness(idBusiness:string): Promise<Business> {
  	const url = `${this.businessUrl}/${idBusiness}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json() as Business)
               .catch(this.handleError);
  }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
