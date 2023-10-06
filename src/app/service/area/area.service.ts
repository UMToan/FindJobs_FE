import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Area } from '../../area';
@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private baseURL = "http://localhost:8080/api-admin-area";
  constructor(private httpClient: HttpClient) { }

  getAreasList(): Observable<Area[]>{
    return this.httpClient.get<Area[]>(`${this.baseURL}`);
  }

  createAreas(area: Area): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, area);
  }

  getAreasById(id: number): Observable<Area>{
    return this.httpClient.get<Area>(`${this.baseURL}/${id}`);
  }

  updateAreas(id: number ,area: Area): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, area);
  }

  
}
