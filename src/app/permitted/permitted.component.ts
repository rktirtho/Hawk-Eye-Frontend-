import { PermittedService } from './../services/permitted.service';
import { Permitted } from './../model/permitted';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permitted',
  templateUrl: './permitted.component.html',
  styleUrls: ['./permitted.component.css']
})
export class PermittedComponent implements OnInit {
  permitteds : Permitted[] 

  constructor(private permittedServic : PermittedService) { }

  ngOnInit(): void {
    this.getAllPermitted()
  }

  getAllPermitted(){
    this.permittedServic.getAllPermitted().subscribe(data => {
      this.permitteds = data
    });
  }

}
