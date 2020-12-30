import { Organization } from './organization';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  base_url = "http://localhost:8080/api/organizations"


  constructor(private httpCliend: HttpClient) { }

  getAllOrg(): Observable<Organization[]>{
    return this.httpCliend.get<Organization[]>(`${this.base_url}`);
  }
}
