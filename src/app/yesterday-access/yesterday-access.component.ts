import { EmployeeMonitoringService } from './../services/employee-monitoring.service';
import { Permitted } from './../model/permitted';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yesterday-access',
  templateUrl: './yesterday-access.component.html',
  styleUrls: ['./yesterday-access.component.css']
})
export class YesterdayAccessComponent implements OnInit {
  employees : Permitted[]

  constructor(private empMonitoringService:EmployeeMonitoringService) { }

  ngOnInit(): void {
    this.getYesterDayAccessedEmployee();
  }

  getYesterDayAccessedEmployee(){
    this.empMonitoringService.getYesterdayAccessedEmployee().subscribe(data =>{
      this.employees = data
    });
  }

}
