import { OrganizationService } from './../organization.service';
import { Organization } from './../organization';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  organizations: Organization[];

  constructor(private orgService: OrganizationService) { }

  ngOnInit(): void {
    this.getAllOrg();
  }

  private getAllOrg() {
    this.orgService.getAllOrg().subscribe(data => {
      this.organizations = data;
    });
  }

}
