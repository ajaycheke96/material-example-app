import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAllDepartments(auth_token, tenant_name): Observable<any> {
    return this.http.get(`${baseUrl}/department/listAllDepartment`, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": tenant_name
      }
    })
  }
}
