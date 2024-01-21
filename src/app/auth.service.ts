import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUser(login: string, pwd:string): Observable<User[]>{
     let params = new HttpParams().set("login",login).set("password",pwd)
     return this.http.get<User[]>("http://localhost:3000/users",{params})
  }
  
  isAuthenticated: boolean = !!localStorage.getItem('token');

  setAuthenticated(value: boolean): void {
    this.isAuthenticated = value;
  }
}
