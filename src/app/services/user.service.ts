import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[];
  constructor() { 
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email:'john1@g.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide:true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email:'kevin_cool@g.com',
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide:true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email:'Karenfuc@g.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide:true
      }
    ];
  }

  getUser():Observable<User[]>{
    return of(this.users);
  }

  addUser(user:User){
    this.users.unshift(user);
  }
}
