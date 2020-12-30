import { Permitted } from './../model/permitted';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermittedService {
  BASE_URL = "localhost:8080/api/"

  constructor(private httpClient : HttpClient) { }

  getAllPermitted() : Observable<Permitted[]>{
    return this.httpClient.get<Permitted[]>(`${this.BASE_URL+"permitteds"}`);
  }
}
