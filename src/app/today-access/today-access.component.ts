import { EmployeeMonitoring } from './../model/employee-monitoring';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-access',
  templateUrl: './today-access.component.html',
  styleUrls: ['./today-access.component.css']
})
export class TodayAccessComponent implements OnInit {

  constructor(private empMonitoringService : EmployeeMonitoring) { }

  ngOnInit(): void {
  }



}
