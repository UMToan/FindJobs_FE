import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jobs } from '../../model/jobs';
import { Area } from 'src/app/area';
@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private baseURL = "http://localhost:8080/api-admin-jobs";
  constructor(private httpClient: HttpClient) { }

  getJobsList(): Observable<Jobs[]>{
    return this.httpClient.get<Jobs[]>(`${this.baseURL}`);
  }

  createJobs(job: Jobs): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, job);
  }

  getJobsById(id: number): Observable<Jobs>{
    return this.httpClient.get<Jobs>(`${this.baseURL}/${id}`);
  }

  updateJobs(id: number ,job: Jobs): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, job);
  }

  searchJobs(query: string){
    return this.httpClient.get<Jobs[]>(`http://localhost:8080/api-admin-search?${query}`);
  }

  filterJobs(id: number): Observable<Jobs[]>{
    console.log(id);
    return this.httpClient.get<Jobs[]>(`http://localhost:8080/api-admin-filter/${id}`);
  }
}
