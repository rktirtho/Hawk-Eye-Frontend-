import { Permitted } from './../model/permitted';
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

  getTodayAccessedEmployee() : Observable<Permitted[]>{
    return this.httpClient.get<Permitted[]>(`${this.base_url+"monitoring/today"}`);
  }

  getYesterdayAccessedEmployee() : Observable<Permitted[]>{
    return this.httpClient.get<Permitted[]>(`${this.base_url+"monitoring/yesterday"}`);
  }

  getAllAccessedEmployee() : Observable<Permitted[]>{
    return this.httpClient.get<Permitted[]>(`${this.base_url+"monitoring/access/authorized"}`);
  }

  getAuthorizedAccessedEmployee() : Observable<Permitted[]>{
    return this.httpClient.get<Permitted[]>(`${this.base_url+"monitoring/access/unauthorized"}`);
  }
  getUnauthorizedAccessedEmployee() : Observable<Permitted[]>{
    return this.httpClient.get<Permitted[]>(`${this.base_url+"monitoring/today"}`);
  }
}
