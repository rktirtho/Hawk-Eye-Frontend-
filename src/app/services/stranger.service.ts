import { Stranger } from './../model/stranger';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StrangerService {
  base_url = "http://localhost:8080/api/"

  constructor(private httpClient : HttpClient) { }

  getAllStrangers():Observable<Stranger[]>{
    return this.httpClient.get<Stranger[]>(`${this.base_url+"monitoring/strangers"}`);
  }
}
