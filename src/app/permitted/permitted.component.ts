import { OrganizationService } from './../organization.service';
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

  constructor(private organizationService : PermittedService) { }

  ngOnInit(): void {
    this.getAllPermitted()
  }

  private getAllPermitted() {
    this.organizationService.getAllPermitted().subscribe(data => {
      console.log(data)
      this.permitteds = data;
    });
  }

}
