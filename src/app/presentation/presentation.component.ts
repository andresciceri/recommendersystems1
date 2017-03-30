import { Component, OnInit } from '@angular/core';
import { apipaths } from '../app.apis';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

	path: string;
  constructor() { 
  	this.path = apipaths.localPath;
  }

  ngOnInit() {
  }

}
