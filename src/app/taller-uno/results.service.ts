import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { apipaths } from '../app.apis';

import {Recommendation} from './recommendation';
import {RecommendationMht} from './recommendation-mht';
import {Evaluation} from './evaluation';

@Injectable()
export class ResultsService {

	private headers = new Headers({'Content-Type': 'application/json'});
  	//private recommendationUrl = 'api/recomendations';  // URL to web api
  	//private evaluationUrl = 'api/models';  // URL to web api
  	private recommendationUrl = apipaths.urlR + 'recom_eleccion';  // URL to web api
    private evaluationUrl = apipaths.urlR + 'evaluacion_modelos';  // URL to web api
    private mahoutUrl = apipaths.urlJ + 'recommend';  // URL to web api

  constructor(private http: Http) { }

  getRecommendations(): Promise<Recommendation[]> {
    
    return this.http.get(this.recommendationUrl)
               .toPromise()
               .then(response => response.json() as Recommendation[])
               .catch(this.handleError);
  }

  getRecommendation(idUser: number, similarity: string, percentage: number, filter: number): Promise<Recommendation[]> {
    const url = `${this.recommendationUrl}/${idUser}/${similarity}/${filter}/${percentage}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json() as Recommendation[])
               .catch(this.handleError);
  }

  getRecommendationMahout(idUser: number, similarity: string, percentage: number, filter: number, neighbors: number): Promise<RecommendationMht[]> {
    const url = `${this.mahoutUrl}?user=${idUser}&similarity=${similarity}&neighbors=${neighbors}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json() as RecommendationMht[])
               .catch(this.handleError);
  }

  getModelEvaluation(similarity: string, filter: number): Promise<Evaluation> {
  	const url = `${this.evaluationUrl}/${similarity}/${filter}`;
  	return this.http.get(url)
               .toPromise()
               .then(response => response.json() as Evaluation)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
