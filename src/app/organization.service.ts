import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  base_url = "http://localhost:8080/api/v1/employees"


  constructor() { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpCliend.get<Employee[]>(`${this.base_url}`);
}
