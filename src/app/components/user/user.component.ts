import { Component,OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector:'app-user',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css']
})

export class UserComponent implements OnInit{
    user!:User;

    constructor(){
        
    }
    ngOnInit(): void {
        this.user={
            firstName:'Matt',
            lastName:'Philip',
            email:'hell@g.com'
        }
    }
    
}



    // styles:[`
    //     h2{
    //         color:blue;
    //     }
    // `]
    // in class
// firstName:string;
//     lastName:string;
//     age:number;
//     address:any;
//     boole:boolean;
//     numArray:number[];
//     mixArray:any[];

//     //Methods
//     constructor(){
//         this.firstName = "Gaurav";
//         this.lastName = "Pathak";
//         this.age=30;
//         this.address={
//             house:'7th house',
//             area: 'Race Course',
//             city:'Delhi'
//         }
//         this.boole=false;
//         this.numArray=[1,2,3];
//         this.mixArray=[1,'str',true];

//         console.log('Hello User');
//         this.sayNamaste();
//         console.log(this.age);
//         this.hasBithday();
//         console.log(this.age);
//     }

//     sayNamaste(){
//         console.log(`Namaste ${this.firstName}`);
//         return `Namaste ${this.firstName}`;
//     }

//     hasBithday(){
//         this.age+=1;
//     }

//     addNumber(num1:number,num2:number):number{
//         return 4+2;
//     }