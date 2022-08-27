import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.css']
})
export class TopSongsComponent implements OnInit {

  constructor(private api:ApiService) { }
  SongsData!:any;
  ngOnInit(): void {
    this.getAllData()
  }
  getAllData(){
    this.api.getData()
      .subscribe(res=>{
        this.SongsData = res;
        console.warn(this.SongsData)
      });
  }
}
