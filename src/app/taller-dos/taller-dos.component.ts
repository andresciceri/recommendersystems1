import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/primeng';
import { User }         from './user';
import { Business }         from './business';

import { ResultsServiceDos }         from './results.service';

@Component({
  selector: 'app-taller-dos',
  templateUrl: './taller-dos.component.html',
  styleUrls: ['./taller-dos.component.css']
})
export class TallerDosComponent implements OnInit {

	user: User;
	tags: string[];
	city: string;
	cities: any[];
	businesses: Business[];

  constructor(private resultsService: ResultsServiceDos) { 
  	this.user = new User;
  	this.cities = [{name: "Toronto", value: "toronto"}, {name: "Vegas", value: "vegas"},{name:"Phoenix", value:"Phoenix"}];
  	this.businesses = [];
  }

  ngOnInit() {
  }

  recommender () {
  	this.resultsService
        .getRecommendation(this.user.user_id,this.city,this.tags[0])
        .then(recommendations => {
          for (var i = 0; i < recommendations.length; ++i) {
          	// code...
          	this.resultsService
	        .getBusiness(recommendations[i][0])
	        .then(business => {
	          this.businesses.push(business[0]);
	          console.log(this.businesses);
	        });
          }
        });
  }

}
