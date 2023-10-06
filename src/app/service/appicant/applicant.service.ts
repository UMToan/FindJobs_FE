import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appicants } from 'src/app/model/applicants';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  private baseURL = "http://localhost:8080/applicant";
  constructor(private httpClient: HttpClient) { }

  getApplicantList(): Observable<Appicants[]>{
    return this.httpClient.get<Appicants[]>(`${this.baseURL}`);
  }

  applyAppicant(id: number,appicants: Appicants): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${id}`, appicants);
  }

  // getAreasById(id: number): Observable<Appicant>{
  //   return this.httpClient.get<Appicant>(`${this.baseURL}/${id}`);
  // }

  // updateAreas(id: number ,Appicant: Appicant): Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/${id}`, Appicant);
  }


