import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(private http: HttpClient) { }

  getDesignationList(auth_token, tenant_name): Observable<any> {
    return this.http.get(`${baseUrl}/designation/listAllDesignation`, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": tenant_name
      }
    })
  }
}
