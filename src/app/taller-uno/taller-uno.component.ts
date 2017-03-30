import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/primeng';

import {Recommendation} from './recommendation';
import { User }         from '../create-user/user';
import { Book }         from '../create-book/book';

import { ResultsService }         from './results.service';
import { BookService }         from '../create-book/book.service';

@Component({
  selector: 'app-taller-uno',
  templateUrl: './taller-uno.component.html',
  styleUrls: ['./taller-uno.component.css']
})
export class TallerUnoComponent implements OnInit {

	similarity : string;
  percentage : number;
  filter: number;
  precisionF: any;
  precisionS: any;
  recallF: any;
  recallS: any;
  user: User;
  books: Book[];
  neighbors: number;
    
  msgs: Message[];

  constructor(private resultsService: ResultsService, private bookService: BookService) {
    this.user = new User;
    this.books = [];
  	this.precisionF = {
            labels: [1,2,3,4,5,6,7,8,9,10],
            datasets: []
        };
    this.precisionS = {
            labels: [1,2,3,4,5,6,7,8,9,10],
            datasets: []
        };
    this.recallF = {
            labels: [1,2,3,4,5,6,7,8,9,10],
            datasets: []
        };
    this.recallS = {
            labels: [1,2,3,4,5,6,7,8,9,10],
            datasets: []
        };
  }

  selectData(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.precisionF.datasets[event.element._datasetIndex].data[event.element._index]});
    }

  ngOnInit() {

    this.resultsService
        .getModelEvaluation('j',50)
        .then(evaluation => {
          //console.log(evaluation['precision']);
          let ev = {
              label:'Jaccard',
              data: [],
              fill: false,
              borderColor: '#4bc0c0'
          };

          for (let i = 0; i < evaluation['precision'].length; ++i) {
            ev.data.push(evaluation['precision'][i]);
          }
          this.precisionF.datasets.push(ev);
          for (let i = 0; i < evaluation['recall'].length; ++i) {
            ev.data.push(evaluation['recall'][i]);
          }
          this.recallF.datasets.push(ev);
        });

    this.resultsService
        .getModelEvaluation('j',70)
        .then(evaluation => {
          //console.log(evaluation['precision']);
          let ev = {
              label:'Jaccard',
              data: [],
              fill: false,
              borderColor: '#4bc0c0'
          };

          for (let i = 0; i < evaluation['precision'].length; ++i) {
            ev.data.push(evaluation['precision'][i]);
          }
          this.precisionS.datasets.push(ev);
          for (let i = 0; i < evaluation['recall'].length; ++i) {
            ev.data.push(evaluation['recall'][i]);
          }
          this.recallS.datasets.push(ev);
        });

    this.resultsService
        .getModelEvaluation('c',50)
        .then(evaluation => {
          //console.log(evaluation['precision']);
          let ev = {
              label:'Coseno',
              data: [],
              fill: false,
              borderColor: '#00c0ef'
          };

          for (let i = 0; i < evaluation['precision'].length; ++i) {
            ev.data.push(evaluation['precision'][i]);
          }
          this.precisionF.datasets.push(ev);
          for (let i = 0; i < evaluation['recall'].length; ++i) {
            ev.data.push(evaluation['recall'][i]);
          }
          this.recallF.datasets.push(ev);
        });
    this.resultsService
        .getModelEvaluation('c',70)
        .then(evaluation => {
          //console.log(evaluation['precision']);
          let ev = {
              label:'Coseno',
              data: [],
              fill: false,
              borderColor: '#00c0ef'
          };

          for (let i = 0; i < evaluation['precision'].length; ++i) {
            ev.data.push(evaluation['precision'][i]);
          }
          this.precisionS.datasets.push(ev);
          for (let i = 0; i < evaluation['recall'].length; ++i) {
            ev.data.push(evaluation['recall'][i]);
          }
          this.recallS.datasets.push(ev);
        });
    this.resultsService
        .getModelEvaluation('p',50)
        .then(evaluation => {
          console.log(evaluation['precision']);
          let ev = {
              label:'Pearson',
              data: [],
              fill: false,
              borderColor: '#605ca8'
          };

          for (let i = 0; i < evaluation['precision'].length; ++i) {
            ev.data.push(evaluation['precision'][i]);
          }
          this.precisionF.datasets.push(ev);
          for (let i = 0; i < evaluation['recall'].length; ++i) {
            ev.data.push(evaluation['recall'][i]);
          }
          this.recallF.datasets.push(ev);
        });

    this.resultsService
        .getModelEvaluation('p',70)
        .then(evaluation => {
          //console.log(evaluation['precision']);
          let ev = {
              label:'Pearson',
              data: [],
              fill: false,
              borderColor: '#605ca8'
          };

          for (let i = 0; i < evaluation['precision'].length; ++i) {
            ev.data.push(evaluation['precision'][i]);
          }
          this.precisionS.datasets.push(ev);
          for (let i = 0; i < evaluation['recall'].length; ++i) {
            ev.data.push(evaluation['recall'][i]);
          }
          this.recallS.datasets.push(ev);
        });
  }

  search(){

    this.books = [];

    if(this.filter == 1) {
      this.resultsService
        .getRecommendation(this.user.user_id,this.similarity,this.percentage, this.filter)
        .then(recommendations => {
          console.log(recommendations);

          for (var i = 0; i < recommendations.length; ++i) {
            this.bookService
            .getBookISBN(recommendations[i]['ISBN'])
            .then(book => {
              if(book.length > 0){
                this.books.push(book[0]);  
              }
            }); 
          }
        }); 
    } else if(this.filter == 2){
      this.resultsService
        .getRecommendationMahout(this.user.user_id,this.similarity,this.percentage, this.filter,this.neighbors)
        .then(recommendations => {
          console.log(recommendations);

          for (var i = 0; i < recommendations.length; ++i) {
            
            console.log(recommendations[i]['itemID']);
            
            this.bookService
            .getBook(recommendations[i]['itemID'])
            .then(book => {
              console.log(book);
              this.books.push(book);
            }); 
          }
        });
    }
  }

}
