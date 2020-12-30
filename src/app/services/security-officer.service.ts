import { SecurityOfficer } from './../model/sucurityOfficer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityOfficerService {
  base_url = "http://localhost:8080/api/";

  constructor(private httpClient : HttpClient) { }

  getAllSecurity() : Observable<SecurityOfficer[]>{
    return this.httpClient.get<SecurityOfficer[]>(`${this.base_url+"securityofficers"}`);
  }
}
