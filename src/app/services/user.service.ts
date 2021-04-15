import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // baseUrl = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  // userLoginData = {
  //   "username": "admin",
  //   "password": "admin"
  // }

  getAuthToken(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${baseUrl}/rest/api/authenticate`, {
      "username": "admin",
      "password": "admin"
    }, {
      headers: {
        "Content-Type": "application/json",
        "X-Tenant": "test1"
      }
    });
  }

  getAuthTokenByCredentials(user): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${baseUrl}/rest/api/authenticate`, {
      "username": user.value.email,
      "password": user.value.password
    }, {
      headers: {
        "Content-Type": "application/json",
        "X-Tenant": "test1"
      }
    });
  }
}

export interface ApiResponse {
  timestamp: String,
  status: number,
  error: String,
  message: String,
  data: any
}