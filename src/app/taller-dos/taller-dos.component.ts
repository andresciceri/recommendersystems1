import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/primeng';
import { User }         from '../create-user/user';

@Component({
  selector: 'app-taller-dos',
  templateUrl: './taller-dos.component.html',
  styleUrls: ['./taller-dos.component.css']
})
export class TallerDosComponent implements OnInit {

	user: User;

  constructor() { 
  	this.user = new User;
  }

  ngOnInit() {
  }

}
