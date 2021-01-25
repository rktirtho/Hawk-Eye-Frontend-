import { EmployeeMonitoringService } from './../services/employee-monitoring.service';
import { Permitted } from './../model/permitted';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauthrized-access',
  templateUrl: './unauthrized-access.component.html',
  styleUrls: ['./unauthrized-access.component.css']
})
export class UnauthrizedAccessComponent implements OnInit {

  employees : Permitted[]

  constructor(private empMonService :EmployeeMonitoringService) { }

  ngOnInit(): void {
    this.getUnauthorizedAccessEmployee();
  }

  getUnauthorizedAccessEmployee(){
    this.empMonService.getUnauthorizedAccessedEmployee().subscribe(data =>{
      this.employees = data
    });
  }

}
