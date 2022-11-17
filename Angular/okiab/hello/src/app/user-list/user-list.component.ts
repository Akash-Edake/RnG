import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   
  getName(name:any){
    alert(name);
  }
  getTextInput(val: any){
    console.log("value", val)
  }
  currVal= ""
 getData(val: any){
  console.log(val);
  this.currVal =val; 
 }

  constructor() { }

  ngOnInit(): void {
  }

}
