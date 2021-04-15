import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { CallLogElement } from '../model/CallLogElement';

@Injectable({
  providedIn: 'root'
})
export class CallLogsService {

  constructor(private http: HttpClient) { }

  // baseUrl = "http://localhost:8080";

  getCallLogList(auth_token): Observable<any> {
    return this.http.get(`${baseUrl}/callLog/listAllCallLog`, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": "test1"
      }
    });
  }

  getCallLogById(auth_token, callLogId: number): Observable<any> {
    return this.http.get(`${baseUrl}/callLog/${callLogId}`, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": "test1"
      }
    });
  }

  saveCallLog(auth_token, callLog: CallLogElement): Observable<any> {
    // console.log(auth_token + " : " + callLog);
    return this.http.post(`${baseUrl}/callLog/saveCallLog`, callLog, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": "test1"
      }
    })
  }

  updateCallLog(auth_token, callLog: CallLogElement): Observable<any> {
    // console.log(auth_token + " : " + callLog);
    return this.http.post(`${baseUrl}/callLog/updateCallLog`, callLog, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": "test1"
      }
    })
  }

  deleteCallLog(auth_token, callLog: CallLogElement): Observable<any> {
    // console.log("From deleteCallLog: " + callLog);
    return this.http.post(`${baseUrl}/callLog/deleteCallLog`, callLog, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": "test1"
      }
    });
  }
}
