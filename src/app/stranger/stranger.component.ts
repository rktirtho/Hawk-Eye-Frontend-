import { StrangerService } from './../services/stranger.service';
import { Component, OnInit } from '@angular/core';
import { Stranger } from '../model/stranger';

@Component({
  selector: 'app-stranger',
  templateUrl: './stranger.component.html',
  styleUrls: ['./stranger.component.css']
})
export class StrangerComponent implements OnInit {

  strangers : Stranger[]

  constructor(private strangerService : StrangerService) { }

  ngOnInit(): void {
    this.getAllStrangers()
  }

  getAllStrangers(){
    this.strangerService.getAllStrangers().subscribe(data =>{
      this.strangers = data

    });
  }

}
