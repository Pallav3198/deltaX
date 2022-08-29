import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  //multistep form
  step=1;
  progress_value = 0;
  update_step_inc(ele:any){
    this.step+=1;
    if(this.step>3){
      this.step = 1;
      console.log(ele)
    }
  }
  update_step_dec(ele:any){
    if(this.step<=1){
      this.step = 1;
      console.log(ele)
    }
    else{
      this.step = this.step+1;
    }
  }
  constructor(private formbuilder: FormBuilder,private api:ApiService,private render:Renderer2) { }
  // 
  formValue!:FormGroup;
  //multiselect variables
    dropdownList = [{}];
    selectedItems = [{}];
    dropdownSettings = {};

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      songName:[''],
      releaseDate:[''],
      artwork:[''],
      //artist
      artistName:[''],
      artistDOB:[''],
      bio:['']
    })
    //MULTISELECT SECTION 
    this.dropdownList = [
          {"id":1,"itemName":"India"},
          {"id":2,"itemName":"Singapore"},
          {"id":3,"itemName":"Australia"},
          {"id":4,"itemName":"Canada"},
          {"id":5,"itemName":"South Korea"},
          {"id":6,"itemName":"Germany"},
          {"id":7,"itemName":"France"},
          {"id":8,"itemName":"Russia"},
          {"id":9,"itemName":"Italy"},
          {"id":10,"itemName":"Sweden"}
  ];
    this.selectedItems = [
          {"id":2,"itemName":"Singapore"},
          {"id":3,"itemName":"Australia"},
          {"id":4,"itemName":"Canada"},
          {"id":5,"itemName":"South Korea"}
    ];
    this.dropdownSettings = { 
      singleSelection: false, 
      text:"Select Countries",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      classes:"myclass custom-class"
    };            

  }

  //post data
  postDetails(){
    let obj= {
      'songName': this.formValue.value.songName,
      'releaseDate': this.formValue.value.releaseDate,
      'artwork': this.formValue.value.artwork,
      'artist': this.formValue.value.artist,
      'artistDOB': this.formValue.value.artistDOB,
      'artistBio': this.formValue.value.artistBio
    };
    this.api.postData(obj)
    .subscribe({
      next(res) {console.log('Details Added Successfully',res)},
      error(err) {console.log(err)}
    })
    this.formValue.value.reset();
  }
  //MULTISELECT
      onItemSelect(item:any){
          console.log(item);
          console.log(this.selectedItems);
      }
      OnItemDeSelect(item:any){
          console.log(item);
          console.log(this.selectedItems);
      }
      onSelectAll(items: any){
          console.log(items);
      }
      onDeSelectAll(items: any){
          console.log(items);
      }
      //enable add artist
      enable_new_artist(ele:any){
        console.log(ele);
      }
      
      updateProgressBar(){
        if()
      }
}
