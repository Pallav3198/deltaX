import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flag=0;
  login(e:any){
    this.flag=0;
    e.preventDefault();
  }
  signup(e:any){
    this.flag=1;
    e.preventDefault();
  }
}
