import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resume } from 'src/app/model/resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private baseURL = "http://localhost:8080/api-admin-resume";
  constructor(private httpClient: HttpClient) { }

  getResumeList(): Observable<Resume[]>{
    return this.httpClient.get<Resume[]>(`${this.baseURL}`);
  }

  createResume(resume: Resume): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, resume);
  }

  getResumeById(id: number): Observable<Resume>{
    return this.httpClient.get<Resume>(`${this.baseURL}/${id}`);
  }

  updateResume(id: number ,resume: Resume): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, resume);
  }

  // searchJobs(query: string){
  //   return this.httpClient.get<Jobs[]>(`http://localhost:8080/api-admin-search?${query}`);
  // }

  // filterJobs(id: number): Observable<Jobs[]>{
  //   console.log(id);
  //   return this.httpClient.get<Jobs[]>(`http://localhost:8080/api-admin-filter/${id}`);
  // }
}
