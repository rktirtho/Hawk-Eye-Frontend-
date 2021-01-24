import { EmployeeMonitoring } from './../model/employee-monitoring';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeMonitoringService {
  base_url = "http://localhost:8080/api/"

  constructor(private httpClient : HttpClient) { }

  getToday(): Observable<EmployeeMonitoring[]>{
    return this.httpClient.get<EmployeeMonitoring[]>(`${this.base_url+"monitoring/today"}`);
  }
}
