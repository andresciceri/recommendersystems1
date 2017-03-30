import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { User }                from './user';
import { UserService }         from './user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

	users: User[];
	user : User;

  constructor(private userService: UserService, private router: Router) { 
  	this.user = new User();
  }

  ngOnInit() {
  }

  getUser(id: number): void {
  	this.userService
        .getUser(id)
        .then(user => {
        	console.log(user);
        });
  }

  getUsers(): void {
    this.userService
        .getUsers()
        .then(users => this.users = users);
  }

  addUser(location: string, age: number): void {
    location = location.trim();
    if (!location) { return; }
    this.userService.create(location, age)
      .then(user => {
      	console.log(user);
      	alert("Usuario Creado: \n Ubicación: " + user.location + "\nEdad: " + user.age);      	
      });
  }

  onSubmit() {
  	this.addUser(this.user.location,this.user.age);
  }

}
