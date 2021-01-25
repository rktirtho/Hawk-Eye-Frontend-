import { EmployeeMonitoringService } from './../services/employee-monitoring.service';
import { Permitted } from './../model/permitted';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorized-access',
  templateUrl: './authorized-access.component.html',
  styleUrls: ['./authorized-access.component.css']
})
export class AuthorizedAccessComponent implements OnInit {

  employees : Permitted[]

  constructor(private empMonService:EmployeeMonitoringService) { }

  ngOnInit(): void {
    this.getAuthorizedAccess();
  }

  getAuthorizedAccess(){
    this.empMonService.getAuthorizedAccessedEmployee().subscribe(data =>{
      this.employees = data
    });
  }

}
