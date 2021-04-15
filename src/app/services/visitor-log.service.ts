import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitorLogService {

  constructor(
    private http: HttpClient
  ) { }

  private buildHeaders(auth_token, tenant_name) {
    return {
      "Authorization": `Bearer ${auth_token}`,
      "X-Tenant": tenant_name
    }
  }

  // list All
  getAllVisitorLogs(auth_token, tenant_name): Observable<any> {
    return this.http.get(`${baseUrl}/visitorLog/listAllVisitorLog`, {
      headers: this.buildHeaders(auth_token, tenant_name)
    })
  }

  // get one
  getOneVisitorLogById(auth_token, tenant_name, visitorLogId): Observable<any> {
    return this.http.get(`${baseUrl}/visitorLog/${visitorLogId}`, {
      headers: this.buildHeaders(auth_token, tenant_name)
    })
  }

  // delete one
  deleteVisitorLog(auth_token, tenant_name, visitorLog): Observable<any> {
    return this.http.post(`${baseUrl}/visitorLog/deleteVisitorLog`, visitorLog, {
      headers: this.buildHeaders(auth_token, tenant_name)
    })
  }

  // save
  saveVisitorLog(auth_token, tenant_name, visitorLogForm): Observable<any> {
    return this.http.post(`${baseUrl}/visitorLog/saveVisitorLog`, visitorLogForm, {
      headers: this.buildHeaders(auth_token, tenant_name)
    })
  }

  // update
  updateVisitorLog(auth_token, tenant_name, visitorLogForm): Observable<any> {
    return this.http.post(`${baseUrl}/visitorLog/updateVisitorLog`, visitorLogForm, {
      headers: this.buildHeaders(auth_token, tenant_name)
    })
  }
}
