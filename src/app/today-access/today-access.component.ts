import { EmployeeMonitoringService } from './../services/employee-monitoring.service';
import { Permitted } from './../model/permitted';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-access',
  templateUrl: './today-access.component.html',
  styleUrls: ['./today-access.component.css']
})
export class TodayAccessComponent implements OnInit {

  emoloyees : Permitted[]

  constructor(private empMonitoringService : EmployeeMonitoringService) { }

  ngOnInit(): void {
    this.getPermittedOfTodayAccessed();
  }

  private getPermittedOfTodayAccessed(){
    this.empMonitoringService.getTodayAccessedEmployee().subscribe(data =>{
      this.emoloyees = data
      console.log(data)
    });
  }



}
