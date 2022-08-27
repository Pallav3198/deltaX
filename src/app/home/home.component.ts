import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }
  content=1;
  page='Home'
  flag=1;
  loadContent(element:any){
    this.page=element.innerHTML;
    if(this.page=='Home'){
      this.content=1;
      this.flag=1;
    }
    else if(this.page=='Top Songs'){
      this.content=2;
      this.flag=2;
    }
    else if(this.page=='Top Artists'){
      this.content=3;
      this.flag=3;
    }
  }
}
