import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {



  private baseURL = "http://localhost:8080/account";
  constructor(private httpClient: HttpClient) { }


  login(account: Account): Observable<Account>{
    return this.httpClient.post<Account>(`${this.baseURL}/login`, account);
  }

  getAccList(): Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.baseURL}`);
  }

}
