import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  users:object[]=[
    {name:'mostafa',age:33,img:'assets/images/team-bw-3.jpg',salary:3000},
    {name:'amr',age:44,img:'assets/images/team-bw-3.jpg',salary:4000},
    {name:'menna',age:33,img:'assets/images/team-bw-3.jpg',salary:5000},
    {name:'amir',age:43,img:'assets/images/team-bw-3.jpg',salary:6000},

  ];
  welcome(){
    alert("ay a7agaa")
  }
  constructor() { }
}
