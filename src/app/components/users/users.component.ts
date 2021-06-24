import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'

import { User } from '../../models/User'; 
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user:User={
    firstName:'',
    lastName:'',
    email:''
  }
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm:boolean=false;
  @ViewChild('userForm') form:any;

  constructor(private userService:UserService) { 
    this.users=[
          {
            firstName:'Matt',
            lastName:'Philip',
            email:''
          }];
  }

  ngOnInit() {

    this.userService.getUser().subscribe((users)=>{
      this.users=users;
      this.loaded = true;
    });
    
  }

  // addUser() {
  //   this.user.isActive=true;
  //   this.user.registered=new Date();
  //   this.users.unshift(this.user);
  //   this.user={
  //     firstName:'',
  //     lastName:'',
  //     email:''
  //   }
  // }

  onSubmit({value,valid}:NgForm){
    if(!valid){
      console.log("Not Valid");
    } else{
      value.isActive=true;
      value.registered=new Date();
      value.hide=true;
      this.userService.addUser(value);
      this.form.reset();
    }
  }
  
}

// import { Component, OnInit } from '@angular/core';
// import {User} from '../../models/User';

// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.css']
// })
// export class UsersComponent implements OnInit {
//   users:User[];
//   showExtended:boolean=true;
//   isloaded:boolean=false;
//   enableAdd:boolean=true;
//   currentClasses={};
//   currentStyles={};

//   constructor() {  this.users=[
//     {
//       firstName:'Matt',
//       lastName:'Philip',
//       age:30,
//       address:{
//           street:'20 M',
//           area:'Nang',
//           city:'PN'
//       }
//     }];
//   }

//   ngOnInit(): void {

//       this.users=[
//         {
//           firstName:'Matt',
//           lastName:'Philip',
//           age:30,
//           address:{
//               street:'20 M',
//               area:'Nang',
//               city:'PN'
//           },
//           image:'http://lorempixel.com/600/600/people/5',
//           isActive:true
//         },
//         {
//           firstName:'Ben',
//           lastName:'Awad',
//           age:24,
//           address:{
//               street:'45 1st street',
//               area:'Boston',
//               city:'PN'
//           },
//           image:'http://lorempixel.com/600/600/people/4',
//           isActive:false
//         },
//         {
//           firstName:'Sam',
//           lastName:'Fork',
//           age:30,
//           address:{
//               street:'120 P',
//               area:'Lapis',
//               city:'MI'
//           },
//           image:'http://lorempixel.com/600/600/people/7',
//           isActive:true
//         }
//       ];
//       this.isloaded=true;

//     // this.showExtended=false;
    
//     // this.addUser({
//     //   firstName:'Saur',
//     //   lastName:'Path',
//     //   // age:19,
//     //   // address:{
//     //   //     street:'22 P',
//     //   //     area:'Delh',
//     //   //     city:'MI'
//     //   // }
//     // });

//     this.setCurrentClasses();
//     this.setCurrentStyles();
//   }

//   addUser(user:User){
//     this.users.push(user);
//   }

//   setCurrentClasses(){
//     this.currentClasses={
//       'btn-success':this.enableAdd,
//       'big-text':this.showExtended
//     }
//   }
//   setCurrentStyles(){
//     this.currentStyles={
//       'padding-top':this.showExtended?'0':'40px',
//       'font-size':this.showExtended?'':'40px'
//     }
//   }
// }
