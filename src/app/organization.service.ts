import { Organization } from './organization';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Permitted } from './model/permitted';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  base_url = "http://localhost:8080/api/"

  constructor(private httpCliend: HttpClient) { }

  getAllOrg(): Observable<Organization[]>{
    return this.httpCliend.get<Organization[]>(`${this.base_url+"organizations"}`);
  }

  getAllPermitted() : Observable<Permitted[]>{
    return this.httpCliend.get<Permitted[]>(`${this.base_url+"permitteds/org/16"}`);
  }
}
